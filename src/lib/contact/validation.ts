// src/lib/contact/validation.ts
export interface ContactFormData {
  fullName: string;
  email: string;
  businessType: string;
  projectType: string;
  budget: string;
  message: string;
  terms: boolean;
  company?: string; // honeypot
  turnstileToken?: string; // added on client
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactData(data: ContactFormData): string | null {
  if (!data.fullName || data.fullName.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (!data.email || !isValidEmail(data.email)) {
    return 'Please enter a valid email address';
  }
  if (!data.businessType || data.businessType.trim().length < 2) {
    return 'Please enter your business type';
  }
  if (!data.projectType || data.projectType.trim().length < 2) {
    return 'Please enter your project type';
  }
  if (!data.budget || data.budget.trim().length < 1) {
    return 'Please enter your budget range';
  }
  if (!data.message || data.message.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  if (!data.terms) {
    return 'You must agree to the terms';
  }

  return null; // valid
}

export function isBotSubmission(company?: string) {
  return !!company && company.trim().length > 0;
}
