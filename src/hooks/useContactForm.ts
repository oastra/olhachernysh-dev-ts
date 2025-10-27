import { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';

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

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case 'fullName':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          return 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value || (typeof value === 'string' && !validateEmail(value))) {
          return 'Please enter a valid email address';
        }
        break;
      case 'businessType':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          return 'Please enter your business type';
        }
        break;
      case 'projectType':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          return 'Please enter your project type';
        }
        break;
      case 'budget':
        if (!value || (typeof value === 'string' && value.trim().length < 1)) {
          return 'Please enter your budget range';
        }
        break;
      case 'message':
        if (!value || (typeof value === 'string' && value.trim().length < 10)) {
          return 'Message must be at least 10 characters';
        }
        break;
      case 'terms':
        if (!value) {
          return 'You must agree to the terms';
        }
        break;
    }
    return '';
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate each field explicitly
    const fields: (keyof FormData)[] = [
      'fullName',
      'email',
      'businessType',
      'projectType',
      'budget',
      'message',
      'terms',
    ];

    fields.forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handlers
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type } = e.target;
    const value =
      type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    if (error) {
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');

      // Reset form on success
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

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
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
