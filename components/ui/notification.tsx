import ReactDOM from 'react-dom';

import classes from './notification.module.scss';
import React from 'react';

function Notification(props :any) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  const notificationsElement = document.getElementById('notifications');

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    notificationsElement ? notificationsElement : document.createElement('div')
  );
}

export default Notification;
