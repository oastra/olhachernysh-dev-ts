// src/lib/turnstile.ts
export async function verifyTurnstileToken(
  token: string | null,
  remoteIp?: string | null
): Promise<boolean> {
  if (!token) {
    console.error('Turnstile token missing');
    return false;
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not set');
    return false;
  }

  const res = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: remoteIp ?? '',
      }),
    }
  );

  const data = (await res.json()) as {
    success?: boolean;
    'error-codes'?: string[];
  };

  if (!data.success) {
    console.error('Turnstile verification failed', data['error-codes']);
  }

  return !!data.success;
}
