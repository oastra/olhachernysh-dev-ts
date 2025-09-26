import { FormField } from '../types/contact-form.types';

export const formFields: FormField[] = [
  {
    label: 'Full Name',
    placeholder: 'Your Name*',
    type: 'text',
    name: 'fullName',
    required: true,
  },
  {
    label: 'Email',
    placeholder: 'Your Email*',
    type: 'email',
    name: 'email',
    required: true,
  },
  {
    label: 'Type of Business',
    placeholder: 'Your Type of Business*',
    type: 'text',
    name: 'businessType',
    required: true,
  },
  {
    label: 'Project Type',
    placeholder: 'Your Project Type*',
    type: 'text',
    name: 'projectType',
    required: true,
  },
  {
    label: 'Budget Range',
    placeholder: 'Your Budget*',
    type: 'text',
    name: 'budget',
    required: true,
  },
];
