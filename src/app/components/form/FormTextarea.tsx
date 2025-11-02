// components/Contact/FormTextarea.tsx
import React from 'react';

interface FormTextareaProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string; // 👈 NEW
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void; // 👈 NEW
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  label,
  placeholder,
  value,
  error,
  disabled = false,
  onChange,
  onBlur,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-white text-sm tracking-wide">
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={`w-full rounded-md bg-white/15 backdrop-blur-sm px-4 py-3.5 text-h6
          text-white placeholder-white/60 border border-white/20
          focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40
          transition-all duration-300 hover:bg-white/20 hover:border-white/30 
          resize-vertical min-h-[120px]
          ${error ? 'border-red-300 focus:ring-red-300/70' : ''}`}
      />

      {error && <p className="text-red-300 text-sm animate-pulse">{error}</p>}
    </div>
  );
};
