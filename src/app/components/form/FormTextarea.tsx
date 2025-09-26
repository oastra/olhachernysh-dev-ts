import React from 'react';

interface FormTextareaProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  label,
  placeholder,
  value,
  disabled = false,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-h6 font-medium text-white/90">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-white/15 backdrop-blur-sm px-4 py-3.5 text-h6
                 text-white placeholder-white/60 border border-white/20
                 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40
                 transition-all duration-300 hover:bg-white/20 hover:border-white/30 
                 resize-vertical min-h-[120px]"
        disabled={disabled}
      />
    </div>
  );
};
