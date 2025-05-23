import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

type ToastVariant = 'info' | 'success' | 'warning' | 'error';

export interface ToastProps {
  id: string;
  title: string;
  message?: string;
  variant?: ToastVariant;
  duration?: number;
  onClose: (id: string) => void;
}

const variantStyles: Record<ToastVariant, string> = {
  info: 'bg-blue-100 text-blue-800 border-blue-300',
  success: 'bg-green-100 text-green-800 border-green-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  error: 'bg-red-100 text-red-800 border-red-300',
};

const icons: Record<ToastVariant, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  message,
  variant = 'info',
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      role="alert"
      className={cn(
        'w-full max-w-sm mx-auto mt-2 px-4 py-3 border rounded shadow-sm flex items-start space-x-3 transition-all',
        variantStyles[variant]
      )}
    >
      <div className="text-xl">{icons[variant]}</div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        {message && <p className="text-sm">{message}</p>}
      </div>
      <button
        onClick={() => onClose(id)}
        className="ml-2 text-sm font-bold focus:outline-none"
        aria-label="Close"
      >
        ✖
      </button>
    </div>
  );
};
