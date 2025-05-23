import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps {
  id: string;
  label?: string;
  value?: string;
  placeholder?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  placeholder = 'Select...',
  options,
  onChange,
  helperText,
  errorText,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listboxRef = useRef<HTMLUListElement | null>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (option: SelectOption) => {
    if (!option.disabled) {
      onChange(option.value);
      setIsOpen(false);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const selectedIndex = options.findIndex(opt => opt.value === value);
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    } else {
      setHighlightedIndex(null);
    }
  }, [isOpen, value, options]);

  // Scroll to highlighted option
  useEffect(() => {
    if (
      listboxRef.current &&
      highlightedIndex !== null &&
      listboxRef.current.children[highlightedIndex]
    ) {
      const el = listboxRef.current.children[highlightedIndex] as HTMLElement;
      el.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = (prev ?? -1) + 1;
          return next < options.length ? next : 0;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const next = (prev ?? options.length) - 1;
          return next >= 0 ? next : options.length - 1;
        });
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (highlightedIndex !== null) {
          handleSelect(options[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="w-full space-y-1" ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <div
          id={id}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={`${id}-listbox`}
          tabIndex={0}
          aria-disabled={disabled}
          onClick={() => !disabled && setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
          className={cn(
            'relative flex items-center justify-between border rounded-md px-3 py-2 text-sm cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-blue-500',
            disabled
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-900 hover:border-gray-400',
            errorText ? 'border-red-500' : 'border-gray-300'
          )}
        >
          <span className={selectedOption ? '' : 'text-gray-400'}>
            {selectedOption?.label || placeholder}
          </span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </div>

        {isOpen && (
          <ul
            id={`${id}-listbox`}
            role="listbox"
            ref={listboxRef}
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-lg"
          >
            {options.map((option, index) => {
              const isSelected = value === option.value;
              const isHighlighted = highlightedIndex === index;

              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onClick={() => !option.disabled && handleSelect(option)}
                  className={cn(
                    'cursor-pointer select-none px-4 py-2 text-sm',
                    isHighlighted && 'bg-blue-100',
                    isSelected && 'font-medium text-blue-700',
                    option.disabled && 'opacity-50 cursor-not-allowed',
                    !option.disabled && 'hover:bg-blue-50'
                  )}
                >
                  <div className="flex justify-between items-center">
                    <span>{option.label}</span>
                    {isSelected && <Check className="h-4 w-4 text-blue-600" />}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {helperText && !errorText && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {errorText && (
        <p className="text-xs text-red-500 font-medium">{errorText}</p>
      )}
    </div>
  );
};
