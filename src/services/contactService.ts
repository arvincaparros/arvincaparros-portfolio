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

/**
 * Posts a contact form submission to the public webhook configured via
 * VITE_CONTACT_WEBHOOK_URL (e.g. an n8n webhook that forwards to Messenger).
 *
 * This function only ever talks to that public endpoint. It never reads or
 * sends any secret/token — webhook auth, if the endpoint requires it, must
 * be enforced server-side (see the README note in .env.example), not by
 * embedding a credential in this frontend.
 */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactSubmitResult> {
  const endpoint = import.meta.env.VITE_CONTACT_WEBHOOK_URL;

  if (!endpoint) {
    console.warn(
      '[contactService] VITE_CONTACT_WEBHOOK_URL is not set — the contact form has ' +
        'nowhere to send submissions. Create a .env.local file at the project root ' +
        'with VITE_CONTACT_WEBHOOK_URL=<your n8n webhook URL>, then restart the dev server.',
    );
    return { ok: false, reason: 'not_configured' };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`[contactService] Webhook responded with status ${response.status}`);
      return { ok: false, reason: 'server' };
    }

    return { ok: true };
  } catch (error) {
    console.error('[contactService] Failed to reach the contact webhook.', error);
    return { ok: false, reason: 'network' };
  }
}
