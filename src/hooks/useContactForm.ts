import { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';

const IS_PROD = process.env.NODE_ENV === 'production';

interface FormData {
  fullName: string;
  email: string;
  businessType: string;
  projectType: string;
  budget: string;
  message: string;
  terms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

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
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  /* ---------------- VALIDATION ---------------- */
  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case 'fullName':
        return typeof value === 'string' && value.trim().length >= 2
          ? ''
          : 'Name must be at least 2 characters';

      case 'email':
        return typeof value === 'string' && validateEmail(value)
          ? ''
          : 'Please enter a valid email address';

      case 'businessType':
      case 'projectType':
        return typeof value === 'string' && value.trim().length >= 2
          ? ''
          : 'Please fill out this field';

      case 'budget':
        return typeof value === 'string' && value.trim().length >= 1
          ? ''
          : 'Please enter your budget range';

      case 'message':
        return typeof value === 'string' && value.trim().length >= 10
          ? ''
          : 'Message must be at least 10 characters';

      case 'terms':
        return value ? '' : 'You must agree to the terms';
    }
    return '';
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- EVENT HANDLERS ---------------- */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;
    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const turnstileToken = IS_PROD
        ? document.querySelector<HTMLInputElement>(
            'input[name="cf-turnstile-response"]'
          )?.value || ''
        : '';

      const company =
        document.querySelector<HTMLInputElement>('input[name="company"]')
          ?.value || '';

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          company,
          turnstileToken: IS_PROD ? turnstileToken : undefined,
        }),
      });

      if (!response.ok) throw new Error('Submit failed');

      setSubmitStatus('success');
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
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4500);
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
