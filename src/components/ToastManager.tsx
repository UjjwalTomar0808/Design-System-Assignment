import React, { useCallback, useState } from 'react';
import { Toast, ToastProps } from './Toast';
import { v4 as uuidv4 } from 'uuid';

export interface ToastData extends Omit<ToastProps, 'id' | 'onClose'> {}

export const ToastManager: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = useCallback((toast: ToastData) => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { ...toast, id, onClose: removeToast }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
