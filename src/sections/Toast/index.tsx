import React, { useState, useEffect } from 'react';
import './style.css';

const Toast = (props: any) => {
  const { message, duration = 3000, onClose } = props;
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
      onClose && onClose();
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className={`toast ${display ? 'show' : 'hide'}`}>
      <div className="toast-content">{message}</div>
    </div>
  );
}

export default Toast;