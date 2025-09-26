import { useState } from 'react';
import { FormData, FormErrors } from '../types/contact-form.types';
import { validateField, validateForm } from '@/utils/form-validation';

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    businessType: '',
    projectType: '',
    budget: '',
    message: '',
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Real-time validation for email
    if (name === 'email' && value) {
      const error = validateField(name as keyof FormData, value);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);

    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with your actual submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted successfully:', formData);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        businessType: '',
        projectType: '',
        budget: '',
        message: '',
        terms: false,
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleBlur,
    handleSubmit,
  };
};
