import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Toast, ToastPosition } from '../types/index';

interface NotifierContainerProps {
  notifications: Toast[];
  position: ToastPosition;
  onDismiss: (id: string) => void;
}

export const NotifierContainer: React.FC<NotifierContainerProps> = ({
  notifications,
  position,
  onDismiss
}) => {
  const [notificationsState, setNotificationsState] = useState<Toast[]>([]);

  useEffect(() => {
    setNotificationsState(notifications);
  }, [notifications]);

  const handleDismiss = (id: string) => {
    const notification = document.getElementById(`notifier-${id}`);
    if (notification) {
      notification.classList.add('exit');
      setTimeout(() => {
        onDismiss(id);
      }, 200);
    }
  };

  return createPortal(
    <div className={`notifier-container ${position}`}>
      {notificationsState.map((notification) => (
        <div
          id={`notifier-${notification.id}`}
          key={notification.id}
          className={`notifier ${notification.type}`}
        >
          <span className="notifier-message">{notification.message}</span>
          <button
            className="notifier-close"
            onClick={() => handleDismiss(notification.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
};