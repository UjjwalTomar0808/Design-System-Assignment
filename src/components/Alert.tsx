import React from 'react';
import { ExclamationCircleIcon, CheckCircleIcon, InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  type: AlertType;
  title: string;
  message?: string;
  className?: string;
}

const iconMap: Record<AlertType, React.ReactNode> = {
  info: <InformationCircleIcon className="h-5 w-5 text-blue-500" />,
  success: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
  warning: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />,
  error: <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
};

const bgMap: Record<AlertType, string> = {
  info: 'bg-blue-50 border-blue-200',
  success: 'bg-green-50 border-green-200',
  warning: 'bg-yellow-50 border-yellow-200',
  error: 'bg-red-50 border-red-200',
};

export const Alert: React.FC<AlertProps> = ({ type, title, message, className = '' }) => {
  return (
    <div
      className={`flex items-start gap-3 rounded border p-4 font-manrope text-sm shadow-sm ${bgMap[type]} ${className}`}
      role="alert"
    >
      <div className="shrink-0">{iconMap[type]}</div>
      <div>
        <p className="font-medium text-grayscale-900">{title}</p>
        {message && <p className="text-grayscale-700">{message}</p>}
      </div>
    </div>
  );
};
