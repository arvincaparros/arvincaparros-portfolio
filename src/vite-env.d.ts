/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Public webhook/API endpoint that receives contact form submissions
   * (e.g. an n8n webhook URL). Safe to expose to the browser — never put
   * secrets or auth tokens in a VITE_ variable, since they ship in the
   * client bundle. See src/services/contactService.ts.
   */
  readonly VITE_CONTACT_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
