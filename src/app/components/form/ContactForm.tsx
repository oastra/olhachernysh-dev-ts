'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { FormCheckbox } from './FormCheckbox';
import { SubmitButton } from '../ui/buttons/SubmitButton';
import { StatusMessage } from './StatusMessage';
import { formFields } from '@/data/form-fields';

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
      <StatusMessage status={submitStatus} />

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
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

        <FormTextarea
          name="message"
          label="Message"
          placeholder="Type here..."
          value={formData.message}
          disabled={isSubmitting}
          onChange={handleInputChange}
        />

        <FormCheckbox
          checked={formData.terms}
          error={errors.terms}
          disabled={isSubmitting}
          onChange={handleInputChange}
        />

        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}
