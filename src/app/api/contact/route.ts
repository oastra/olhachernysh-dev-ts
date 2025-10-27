import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  fullName: string;
  email: string;
  businessType: string;
  projectType: string;
  budget: string;
  message: string;
  terms: boolean;
}

export async function POST(request: NextRequest) {
  console.log('📧 Contact API called');

  try {
    const body: ContactFormData = await request.json();
    console.log('📝 Form data received:', {
      fullName: body.fullName,
      email: body.email,
      businessType: body.businessType,
      projectType: body.projectType,
      budget: body.budget,
      hasMessage: !!body.message,
      terms: body.terms,
    });

    const {
      fullName,
      email,
      businessType,
      projectType,
      budget,
      message,
      terms,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !businessType ||
      !projectType ||
      !budget ||
      !message ||
      !terms
    ) {
      console.error('❌ Validation failed - missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      );
    }

    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API key' },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL_TO) {
      console.error('❌ CONTACT_EMAIL_TO is not set');
      return NextResponse.json(
        { error: 'Server configuration error: Missing recipient email' },
        { status: 500 },
      );
    }

    console.log('✅ Environment variables configured');
    console.log('📤 Sending to:', process.env.CONTACT_EMAIL_TO);
    console.log(
      '📤 Sending from:',
      process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
    );

    // Create Nodemailer transporter using Resend SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.resend.com',
      port: 465,
      secure: true,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY,
      },
    });

    console.log('🔧 Transporter created');

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (verifyError) {
      console.error('❌ SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 },
      );
    }

    // Email to you (notification) - Branded template
    const notificationEmail = {
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New Contact: ${projectType} Project`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #fbfdfc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 9, 36, 0.1);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="padding: 0;">
              <div style="background: linear-gradient(90deg, #000924 0%, #092b79 35%, #00d4ff 98%); padding: 40px 30px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 500; line-height: 1.1;">
                  New Project Inquiry
                </h1>
              </div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 24px 0; color: #000924; font-size: 18px; line-height: 1.5;">
                You've received a new project inquiry from your website contact form.
              </p>

              <!-- Info Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: #f8f9fa; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #092e84; font-size: 14px; display: block; margin-bottom: 4px;">Full Name</strong>
                          <span style="color: #000924; font-size: 16px; line-height: 1.5;">${fullName}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #092e84; font-size: 14px; display: block; margin-bottom: 4px;">Email</strong>
                          <a href="mailto:${email}" style="color: #5fa0ff; font-size: 16px; line-height: 1.5; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #092e84; font-size: 14px; display: block; margin-bottom: 4px;">Business Type</strong>
                          <span style="color: #000924; font-size: 16px; line-height: 1.5;">${businessType}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #092e84; font-size: 14px; display: block; margin-bottom: 4px;">Project Type</strong>
                          <span style="color: #000924; font-size: 16px; line-height: 1.5;">${projectType}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <strong style="color: #092e84; font-size: 14px; display: block; margin-bottom: 4px;">Budget Range</strong>
                          <span style="color: #000924; font-size: 16px; line-height: 1.5;">${budget}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom: 24px;">
                <strong style="color: #092e84; font-size: 14px; display: block; margin-bottom: 12px;">Message</strong>
                <div style="background: #f8f9fa; border-left: 4px solid #5fa0ff; padding: 20px; border-radius: 4px;">
                  <p style="margin: 0; color: #000924; font-size: 16px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(90deg, #000924 0%, #092b79 35%, #00d4ff 98%); color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 18px; font-weight: 500;">
                      Reply to ${fullName.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 30px; background: #f8f9fa; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #c3c3c3; font-size: 14px; line-height: 1.5; text-align: center;">
                This email was sent from your website contact form
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
      text: `
New Project Inquiry

Full Name: ${fullName}
Email: ${email}
Business Type: ${businessType}
Project Type: ${projectType}
Budget Range: ${budget}

Message:
${message}

---
Reply to: ${email}
      `,
      replyTo: email,
    };

    console.log('📧 Sending notification email...');
    const notificationResult = await transporter.sendMail(notificationEmail);
    console.log('✅ Notification email sent:', notificationResult.messageId);

    // Confirmation email to user - Branded template
    const confirmationEmail = {
      from: process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev',
      to: email,
      subject: 'Thanks for reaching out!',
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #fbfdfc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 9, 36, 0.1);">
          
          <!-- Header with gradient -->
          <tr>
            <td style="padding: 0;">
              <div style="background: linear-gradient(90deg, #000924 0%, #092b79 35%, #00d4ff 98%); padding: 50px 30px; text-align: center;">
                <h1 style="margin: 0 0 12px 0; color: #ffffff; font-size: 36px; font-weight: 500; line-height: 1.1;">
                  Thank You!
                </h1>
                <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 18px; line-height: 1.5;">
                  We've received your project inquiry
                </p>
              </div>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 24px 0; color: #000924; font-size: 18px; line-height: 1.5;">
                Hi <strong style="color: #092e84;">${fullName}</strong>,
              </p>
              
              <p style="margin: 0 0 24px 0; color: #000924; font-size: 18px; line-height: 1.5;">
                Thank you for reaching out about your <strong>${projectType}</strong> project! We've received your inquiry and will get back to you within 24-48 hours to discuss how we can help bring your vision to life.
              </p>

              <!-- Project Summary Box -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; background: #f8f9fa; border-radius: 8px; overflow: hidden; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px 0; color: #092e84; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                      Your Project Details
                    </p>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #000924; font-size: 16px; line-height: 1.5;"><strong>Project Type:</strong> ${projectType}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #000924; font-size: 16px; line-height: 1.5;"><strong>Business Type:</strong> ${businessType}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0;">
                          <span style="color: #000924; font-size: 16px; line-height: 1.5;"><strong>Budget Range:</strong> ${budget}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Summary -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 12px 0; color: #092e84; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                  Your Message
                </p>
                <div style="background: #ffffff; border-left: 4px solid #5fa0ff; padding: 20px; border-radius: 4px; background: #f8f9fa;">
                  <p style="margin: 0; color: #000924; font-size: 16px; line-height: 1.5; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <p style="margin: 0; color: #000924; font-size: 18px; line-height: 1.5;">
                In the meantime, feel free to explore our portfolio or connect with us on social media.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background: linear-gradient(90deg, rgba(0, 9, 36, 0.03) 0%, rgba(9, 43, 121, 0.03) 35%, rgba(0, 212, 255, 0.03) 98%); border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0 0 16px 0; color: #000924; font-size: 16px; line-height: 1.5;">
                Best regards,<br>
                <strong style="color: #092e84;">Your Team</strong>
              </p>
              <p style="margin: 0; color: #c3c3c3; font-size: 14px; line-height: 1.5;">
                This is an automated confirmation email
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
      text: `
Hi ${fullName},

Thank you for reaching out about your ${projectType} project! We've received your inquiry and will get back to you within 24-48 hours to discuss how we can help bring your vision to life.

Your Project Details:
- Project Type: ${projectType}
- Business Type: ${businessType}
- Budget Range: ${budget}

Your Message:
${message}

In the meantime, feel free to explore our portfolio or connect with us on social media.

Best regards,
Your Team

---
This is an automated confirmation email
      `,
    };

    console.log('📧 Sending confirmation email...');
    const confirmationResult = await transporter.sendMail(confirmationEmail);
    console.log('✅ Confirmation email sent:', confirmationResult.messageId);

    console.log('✅ All emails sent successfully!');
    return NextResponse.json(
      {
        message: 'Emails sent successfully',
        notificationId: notificationResult.messageId,
        confirmationId: confirmationResult.messageId,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('❌ Error in contact API:', error);
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
