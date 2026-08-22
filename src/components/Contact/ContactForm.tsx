import { useId, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Info, Loader2, Mail, MessageSquare, Send, Tag, User } from 'lucide-react';
import { submitContactForm } from '../../services/contactService';
import styles from './ContactForm.module.css';

type FieldName = 'name' | 'email' | 'subject' | 'message';
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: FormValues = { name: '', email: '', subject: '', message: '' };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MIN_LENGTH = 10;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter a message.';
  } else if (values.message.trim().length < MESSAGE_MIN_LENGTH) {
    errors.message = `Your message should be at least ${MESSAGE_MIN_LENGTH} characters.`;
  }

  return errors;
}

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const isSubmitting = status === 'submitting';

  const handleChange = (field: FieldName) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    setStatus((prev) => (prev === 'success' || prev === 'error' ? 'idle' : prev));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus('submitting');

    const result = await submitContactForm({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
      submittedAt: new Date().toISOString(),
    });

    if (result.ok) {
      setValues(initialValues);
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const subjectErrorId = `${formId}-subject-error`;
  const messageErrorId = `${formId}-message-error`;

  return (
    <div className={styles.card}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} noValidate>
          <div role="status" aria-live="polite">
            {status === 'success' && (
              <p className={`${styles.statusBanner} ${styles.statusSuccess}`}>
                <CheckCircle2 size={17} aria-hidden="true" />
                Message sent successfully. I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className={`${styles.statusBanner} ${styles.statusError}`}>
                <AlertCircle size={17} aria-hidden="true" />
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          <fieldset className={styles.fieldset} disabled={isSubmitting} aria-busy={isSubmitting}>
            <legend className="sr-only">Contact form</legend>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor={`${formId}-name`} className="sr-only">
                  Your Name
                </label>
                <User size={16} className={styles.fieldIcon} aria-hidden="true" />
                <input
                  id={`${formId}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your Name"
                  className={styles.input}
                  value={values.name}
                  onChange={handleChange('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? nameErrorId : undefined}
                  required
                />
                {errors.name && (
                  <p id={nameErrorId} className={styles.errorText} role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor={`${formId}-email`} className="sr-only">
                  Your Email
                </label>
                <Mail size={16} className={styles.fieldIcon} aria-hidden="true" />
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  className={styles.input}
                  value={values.email}
                  onChange={handleChange('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? emailErrorId : undefined}
                  required
                />
                {errors.email && (
                  <p id={emailErrorId} className={styles.errorText} role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor={`${formId}-subject`} className="sr-only">
                Subject
              </label>
              <Tag size={16} className={styles.fieldIcon} aria-hidden="true" />
              <input
                id={`${formId}-subject`}
                name="subject"
                type="text"
                autoComplete="off"
                placeholder="Subject"
                className={styles.input}
                value={values.subject}
                onChange={handleChange('subject')}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? subjectErrorId : undefined}
                required
              />
              {errors.subject && (
                <p id={subjectErrorId} className={styles.errorText} role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor={`${formId}-message`} className="sr-only">
                Your Message
              </label>
              <MessageSquare size={16} className={styles.fieldIcon} aria-hidden="true" />
              <textarea
                id={`${formId}-message`}
                name="message"
                placeholder="Your Message"
                className={styles.textarea}
                rows={5}
                value={values.message}
                onChange={handleChange('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? messageErrorId : undefined}
                required
              />
              {errors.message && (
                <p id={messageErrorId} className={styles.errorText} role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 size={17} className={styles.spin} aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} aria-hidden="true" />
                </>
              )}
            </button>
          </fieldset>
        </form>
      </div>

      <div className={styles.panel}>
        <span className={styles.panelIcon} aria-hidden="true">
          <Send size={22} strokeWidth={2} />
        </span>
        <h3 className={styles.panelTitle}>Quick Response</h3>
        <p className={styles.panelDesc}>
          I&rsquo;ll do my best to respond to your message within 24 hours.
        </p>
        <div className={styles.panelFooter}>
          <Info size={14} aria-hidden="true" />
          <span className={styles.panelFooterText}>
            Your information will never be shared with third parties.
          </span>
        </div>
      </div>
    </div>
  );
}
