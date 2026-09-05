export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; reason: 'not_configured' | 'network' | 'server' };

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function formatSubmittedAt(isoString: string): string {
  return new Date(isoString).toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
  });
}

/**
 * Posts a contact form submission to Web3Forms, which emails it straight to
 * the inbox tied to VITE_WEB3FORMS_ACCESS_KEY. That access key is a public
 * identifier by Web3Forms' own design (safe to ship in client-side JS) — it
 * is not a secret and grants no access beyond "deliver to this one inbox".
 */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactSubmitResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.warn(
      '[contactService] VITE_WEB3FORMS_ACCESS_KEY is not set — the contact form has ' +
        'nowhere to send submissions. Sign up at web3forms.com for a free access key, ' +
        'then add VITE_WEB3FORMS_ACCESS_KEY=<your key> to .env.local and restart the dev server.',
    );
    return { ok: false, reason: 'not_configured' };
  }

  try {
    const { submittedAt, ...rest } = payload;

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: 'Portfolio Contact Form',
        ...rest,
        'Submitted At': formatSubmittedAt(submittedAt),
      }),
    });

    const result = (await response.json().catch(() => null)) as { success?: boolean } | null;

    if (!response.ok || !result?.success) {
      console.error(`[contactService] Web3Forms responded with status ${response.status}`, result);
      return { ok: false, reason: 'server' };
    }

    return { ok: true };
  } catch (error) {
    console.error('[contactService] Failed to reach Web3Forms.', error);
    return { ok: false, reason: 'network' };
  }
}
