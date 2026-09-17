'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

type FormValues = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialValues: FormValues = { name: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please add your name.';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Please add a valid email.';
  if (values.message.trim().length < 12) errors.message = 'Tell me a little more about the project.';
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as keyof FormValues;
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
      if (endpoint) {
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 8000);
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ ...values, source: 'nidhi-portfolio' }),
            signal: controller.signal,
          });
          if (!response.ok) throw new Error(`Contact endpoint returned ${response.status}`);
        } finally {
          window.clearTimeout(timeout);
        }
      } else {
        await new Promise((resolve) => window.setTimeout(resolve, 650));
        console.info('Portfolio contact form submission:', values);
      }
      setValues(initialValues);
      setStatus('success');
    } catch (error) {
      console.error('Unable to submit the contact form.', error);
      setStatus('error');
    }
  };

  const statusMessage = status === 'success' ? 'Thanks — your note is on its way.' : status === 'error' ? 'Something went wrong. Please email hello@nidhi.studio instead.' : '';

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" value={values.name} placeholder="Your name" error={errors.name} onChange={handleChange} />
        <Field label="Email" name="email" type="email" value={values.email} placeholder="you@company.com" error={errors.email} onChange={handleChange} />
      </div>
      <Field label="What are you working on?" name="message" value={values.message} placeholder="A few lines about the challenge, timeline, and what good looks like..." error={errors.message} onChange={handleChange} textarea />
      <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <p className="min-h-5 text-sm text-signal" aria-live="polite">{statusMessage}</p>
        <button type="submit" disabled={status === 'submitting'} className="focus-ring inline-flex min-w-40 items-center justify-center rounded-full bg-signal px-5 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-1 hover:bg-cloud disabled:cursor-wait disabled:opacity-60">{status === 'submitting' ? 'Sending...' : 'Send inquiry ↗'}</button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof FormValues;
  value: string;
  placeholder: string;
  error?: string;
  type?: 'text' | 'email';
  textarea?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function Field({ label, name, value, placeholder, error, type = 'text', textarea = false, onChange }: FieldProps) {
  const id = `contact-${name}`;
  const sharedProps = { id, name, value, placeholder, onChange, 'aria-invalid': Boolean(error), 'aria-describedby': error ? `${id}-error` : undefined, className: 'mt-2 block w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-cloud outline-none transition-colors placeholder:text-muted/70 focus:border-signal' };

  return (
    <div>
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{label}</label>
      {textarea ? <textarea {...sharedProps} rows={5} /> : <input {...sharedProps} type={type} />}
      <p id={`${id}-error`} className="mt-2 min-h-5 text-xs text-red-300" aria-live="polite">{error ?? ''}</p>
    </div>
  );
}
