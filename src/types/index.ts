import { ReactNode } from 'react';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
  id: string;
  message: ReactNode;
  type?: ToastType;
  createdAt: number;
  duration: number;
  closable?: boolean;
  className?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
  onAutoClose?: () => void;
}

export interface ToastOptions extends Partial<Omit<Toast, 'id' | 'message' | 'createdAt'>> {}

export interface NotifierOptions {
  position?: ToastPosition;
  duration?: number;
  maxNotifications?: number;
}

export interface NotifierContextValue {
  toasts: Toast[];
  position: ToastPosition;
  setPosition: (position: ToastPosition) => void;
  toast: (message: ReactNode, options?: ToastOptions) => string;
  success: (message: ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  error: (message: ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  warning: (message: ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  info: (message: ReactNode, options?: Omit<ToastOptions, 'type'>) => string;
  remove: (id: string) => void;
  removeAll: () => void;
}