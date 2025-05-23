import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  error?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  error,
  disabled,
}) => (
  <div className="flex flex-col gap-1 font-manrope">
    <label className="text-sm font-medium text-grayscale-800">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`rounded border px-3 py-2 text-sm outline-none transition font-manrope bg-white text-grayscale-900
        ${error ? 'border-red-500' : 'border-grayscale-400'}
        focus:ring-2 focus:ring-primary-700
        disabled:bg-grayscale-200 disabled:cursor-not-allowed`}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);
