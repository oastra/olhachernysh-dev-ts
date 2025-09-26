import React from 'react';
import { FormData, FormErrors } from '@/types/contact-form.types';

interface FormInputProps {
  name: keyof FormData;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type,
  placeholder,
  value,
  error,
  disabled = false,
  onChange,
  onBlur,
}) => {
  const getInputClassName = () => {
    const baseClass = `w-full rounded-md bg-white/15 backdrop-blur-sm px-4 py-3.5 text-h6
                      text-white placeholder-white/60 border transition-all duration-300 
                      hover:bg-white/20 focus:outline-none focus:ring-2`;

    if (error) {
      return `${baseClass} border-red-400 focus:ring-red-300 focus:border-red-400`;
    }

    return `${baseClass} border-white/20 focus:ring-white/30 focus:border-white/40 hover:border-white/30`;
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-h6 font-medium text-white/90">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={getInputClassName()}
        disabled={disabled}
      />
      {error && (
        <p className="text-red-300 text-h6 mt-1 animate-pulse">{error}</p>
      )}
    </div>
  );
};
