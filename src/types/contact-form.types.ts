export interface FormData {
  fullName: string;
  email: string;
  businessType: string;
  projectType: string;
  budget: string;
  message: string;
  terms: boolean;
  [key: string]: string | boolean;
}

export interface FormField {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  required: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';
