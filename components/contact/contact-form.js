import { useState, useEffect } from 'react';

import classes from './contact-form.module.css';
import Notification from '../ui/notification';
import Link from 'next/link';

async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredPassword,
      });
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredPassword('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Loading...',
      message: 'Loading!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Login successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <div className={classes.heading}>
        <p className={classes.title}>Sign in</p > 
       < Link href='/'>
       <img src='/images/site/close.svg' alt='contact' />
       </Link>
        </div>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label className={classes.label} htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
            <label htmlFor='name'>Password</label>
            <input
              type='text'
              id='name'
              required
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
            />
          </div>
        <Link href='/' className={classes.forgot}>
          Forgot Password
          </Link>
        

        <div className={classes.actions}>
          <button>Sign in</button>
        </div>
      </form>
      <p  className={classes.no_account}>Don’t have an account? </p>
      <Link href='/signup' className={classes.signup}>
          Sign Up
          </Link>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
