import { FormData, FormErrors } from '../types/contact-form.types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateFullName = (name: string): boolean => {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateField = (
  name: keyof FormData,
  value: string | boolean
): string | undefined => {
  switch (name) {
    case 'fullName':
      if (!validateRequired(value as string)) {
        return 'Full name is required';
      }
      if (!validateFullName(value as string)) {
        return 'Please enter a valid full name (letters and spaces only, minimum 2 characters)';
      }
      break;

    case 'email':
      if (!validateRequired(value as string)) {
        return 'Email is required';
      }
      if (!validateEmail(value as string)) {
        return 'Please enter a valid email address';
      }
      break;

    case 'businessType':
      if (!validateRequired(value as string)) {
        return 'Business type is required';
      }
      if ((value as string).trim().length < 2) {
        return 'Please provide more details about your business type';
      }
      break;

    case 'projectType':
      if (!validateRequired(value as string)) {
        return 'Project type is required';
      }
      if ((value as string).trim().length < 3) {
        return 'Please provide more details about your project type';
      }
      break;

    case 'budget':
      if (!validateRequired(value as string)) {
        return 'Budget range is required';
      }
      break;

    case 'terms':
      if (!(value as boolean)) {
        return 'You must agree to the Terms of Service and Privacy Policy';
      }
      break;

    default:
      break;
  }
  return undefined;
};

export const validateForm = (formData: FormData): FormErrors => {
  const newErrors: FormErrors = {};

  Object.keys(formData).forEach((key) => {
    const fieldName = key as keyof FormData;
    const error = validateField(fieldName, formData[fieldName]);
    if (error) {
      newErrors[fieldName] = error;
    }
  });

  return newErrors;
};
