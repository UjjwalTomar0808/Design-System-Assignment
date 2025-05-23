import React from 'react';

interface SelectProps {
  label: string;
  options: string[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, error }) => (
  <div className="flex flex-col gap-1 font-manrope">
    <label className="text-sm font-medium text-grayscale-800">{label}</label>
    <select
      className={`rounded border px-3 py-2 text-sm font-manrope transition text-grayscale-900
        ${error ? 'border-red-500' : 'border-grayscale-400'}
        focus:ring-2 focus:ring-primary-700`}
    >
      <option value="">Select...</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);
