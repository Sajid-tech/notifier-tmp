import { Toast, ToastType, ToastOptions, NotifierOptions } from '../types/index';
import { generateId } from '../utils/helpers';

const DEFAULT_OPTIONS: NotifierOptions = {
  position: 'top-right',
  duration: 3000,
  maxNotifications: 3
};

let options: NotifierOptions = { ...DEFAULT_OPTIONS };
let notifications: Toast[] = [];
let listeners: (() => void)[] = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

const autoDismiss = (id: string, duration: number) => {
  if (duration > 0) {
    setTimeout(() => {
      notifierService.dismiss(id);
    }, duration);
  }
};

export const createNotifierService = () => {
  const notifierService = {
    configure: (newOptions: NotifierOptions) => {
      options = { ...options, ...newOptions };
      notifyListeners();
      return notifierService;
    },

    show: (message: string, type: ToastType = 'info', toastOptions?: ToastOptions) => {
      const id = generateId();
      const duration = toastOptions?.duration ?? options.duration;

      const newToast: Toast = {
        id,
        message,
        type,
        createdAt: Date.now(),
        duration: duration || 3000,
        ...toastOptions
      };

      notifications = [newToast, ...notifications].slice(0, options.maxNotifications);
      notifyListeners();

      if (duration && duration > 0) {
        autoDismiss(id, duration);
      }

      return id;
    },

    info: (message: string, options?: ToastOptions) => 
      notifierService.show(message, 'info', options),

    success: (message: string, options?: ToastOptions) => 
      notifierService.show(message, 'success', options),

    warning: (message: string, options?: ToastOptions) => 
      notifierService.show(message, 'warning', options),

    error: (message: string, options?: ToastOptions) => 
      notifierService.show(message, 'error', options),

    dismiss: (id: string) => {
      notifications = notifications.filter(n => n.id !== id);
      notifyListeners();
    },

    clear: () => {
      notifications = [];
      notifyListeners();
      return notifierService;
    },

    getNotifications: () => [...notifications],
    getOptions: () => ({ ...options }),
    addListener: (listener: () => void) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  };

  return notifierService;
};

export const notifierService = createNotifierService();