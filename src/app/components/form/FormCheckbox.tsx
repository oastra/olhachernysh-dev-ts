import React from 'react';
import Link from 'next/link';

interface FormCheckboxProps {
  checked: boolean;
  error?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  checked,
  error,
  disabled = false,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={checked}
          onChange={onChange}
          className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/15 
                   text-white focus:ring-2 focus:ring-white/30 focus:ring-offset-0
                   accent-white"
          disabled={disabled}
        />
        <label
          htmlFor="terms"
          className="text-h6 text-white/80 leading-relaxed"
        >
          I agree to the{' '}
          <Link
            href="/terms"
            className=" underline hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy"
            className="underline hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </label>
      </div>
      {error && <p className="text-red-300 text-sm animate-pulse">{error}</p>}
    </div>
  );
};
