// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyTurnstileToken } from '@/lib/turnstile';
import {
  ContactFormData,
  validateContactData,
  isBotSubmission,
} from '@/lib/contact/validation';
import { sendContactEmails } from '@/lib/email/contactEmails';

const isDev = process.env.NODE_ENV === 'development';

export async function POST(request: NextRequest) {
  if (isDev) console.log('📧 Contact API called');

  try {
    const body = (await request.json()) as ContactFormData;

    // 0) Honeypot
    if (isBotSubmission(body.company)) {
      if (isDev) console.warn('🕵️‍♀️ Honeypot triggered – bot ignored');
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 1) Turnstile
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? null;

    const isHuman = await verifyTurnstileToken(body.turnstileToken ?? null, ip);

    if (!isHuman) {
      return NextResponse.json(
        { error: 'Failed human verification' },
        { status: 400 }
      );
    }

    // 2) Validation
    const validationError = validateContactData(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // 3) Emails
    const { notificationId, confirmationId } = await sendContactEmails(body);

    return NextResponse.json(
      {
        message: 'Emails sent successfully',
        notificationId,
        confirmationId,
      },
      { status: 200 }
    );
  } catch (error) {
    if (isDev) console.error('❌ Error in contact API:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
