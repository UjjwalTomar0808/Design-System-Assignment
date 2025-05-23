import React from 'react';
import { cn } from '@/lib/utils';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  title: string;
  message?: string;
  variant?: AlertVariant;
  className?: string;
}

const variantStyles: Record<AlertVariant, string> = {
  info: 'bg-blue-100 text-blue-800 border-blue-300',
  success: 'bg-green-100 text-green-800 border-green-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  error: 'bg-red-100 text-red-800 border-red-300',
};

const iconMap: Record<AlertVariant, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

export const Alert: React.FC<AlertProps> = ({
  title,
  message,
  variant = 'info',
  className,
}) => {
  return (
    <div
      role="alert"
      className={cn(
        'w-full rounded-md border px-4 py-3 flex items-start space-x-3',
        variantStyles[variant],
        className
      )}
    >
      <div className="text-xl">{iconMap[variant]}</div>
      <div className="flex-1">
        <p className="font-semibold">{title}</p>
        {message && <p className="text-sm mt-1">{message}</p>}
      </div>
    </div>
  );
};
