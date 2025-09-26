export interface FormData {
  fullName: string;
  email: string;
  businessType: string;
  projectType: string;
  budget: string;
  message: string;
  terms: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  businessType?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  terms?: string;
}

export interface FormField {
  label: string;
  placeholder: string;
  type: string;
  name: keyof FormData;
  required: boolean;
}
