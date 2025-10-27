export interface FormData {
  fullName: string;
  email: string;
  businessType: string;
  projectType: string;
  budget: string;
  message: string;
  terms: boolean;
}

export interface FormField {
  label: string;
  placeholder: string;
  type: string;
  name: keyof FormData;
  required: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';
