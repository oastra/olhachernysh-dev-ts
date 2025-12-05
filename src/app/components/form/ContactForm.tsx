'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';
import { SubmitButton } from '../ui/buttons/SubmitButton';
import { StatusMessage } from './StatusMessage';
import { formFields } from '@/data/form-fields';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
const IS_PROD = process.env.NODE_ENV === 'production';

export default function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="space-y-4">
      {/* Global status message (success / error) */}
      <StatusMessage status={submitStatus} />

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Standard fields from config */}
        {formFields.map((field) => (
          <FormInput
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name] as string}
            error={errors[field.name]}
            disabled={isSubmitting}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        ))}

        {/* Message textarea */}
        <FormTextarea
          name="message"
          label="Message"
          placeholder="Tell me a bit more about your project..."
          value={formData.message}
          error={errors.message}
          disabled={isSubmitting}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />

        {/* Terms checkbox */}
        <FormCheckbox
          checked={formData.terms}
          error={errors.terms}
          disabled={isSubmitting}
          onChange={handleInputChange}
        />

        {/* Honeypot field – hidden from real users */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Cloudflare Turnstile widget – invisible in prod */}
        {IS_PROD && TURNSTILE_SITE_KEY && (
          <div className="mt-4">
            <div
              className="cf-turnstile"
              data-sitekey={TURNSTILE_SITE_KEY}
              data-size="invisible" // tells Turnstile to be invisible
              data-theme="auto"
            />
          </div>
        )}

        {/* Status + submit button */}
        <StatusMessage status={submitStatus} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
