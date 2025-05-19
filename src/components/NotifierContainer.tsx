import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Notification, Position } from '../types';
import { createNotifierService } from '../services/NotifierService';

const notifier = createNotifierService();

export const NotifierContainer: React.FC = () => {
  const [notificationsState, setNotificationsState] = useState<Notification[]>([]);
  const [position, setPosition] = useState<Position>(notifier.getOptions().position || 'top-right');

  useEffect(() => {
    const updateNotifications = () => {
      setNotificationsState(notifier.getNotifications());
      setPosition(notifier.getOptions().position || 'top-right');
    };

    const cleanup = notifier.addListener(updateNotifications);
    updateNotifications();

    return cleanup;
  }, []);

  const handleDismiss = (id: string) => {
    notifier.dismiss(id);
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