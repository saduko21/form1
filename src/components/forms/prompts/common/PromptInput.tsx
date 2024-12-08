import React from 'react';

interface PromptInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const PromptInput: React.FC<PromptInputProps> = ({
  label,
  value,
  onChange,
  placeholder
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};