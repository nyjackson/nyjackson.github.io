import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import '../../styles/Contact.css';

const Contact = () => {
  const [status, setStatus] = useState<'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('PENDING');
    setErrorMessage('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Formspree parses the form fields dynamically and handles delivery to nymjackson@gmail.com
      const response = await fetch('https://formspree.io/f/xoqgkyre', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0]?.message || 'Submission failed.');
      }
    } catch (err: any) {
      setStatus('ERROR');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact">
      <p className="section-eyebrow">Contact</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-title">Let's build together.</h3>
          <p className="contact-text">
            Whether you are looking to kick off a complex full-stack web system migration, need assistance auditing data pipeline sync bottlenecks, or just want to talk software engineering shop—drop a line.
          </p>
          <div className="contact-method">
            <Mail size={16} className="text-accent" />
            <a href="mailto:nymjackson@gmail.com" className="contact-email">
              nymjackson@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {status === 'SUCCESS' ? (
            <div className="form-status success">
              <CheckCircle size={24} />
              <div>
                <h4>Message Transmitted</h4>
                <p>Thanks for reaching out! I'll review your transmission and get back to you shortly.</p>
              </div>
              <button onClick={() => setStatus('IDLE')} className="reset-status-btn">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your name"
                  disabled={status === 'PENDING'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="you@example.com"
                  disabled={status === 'PENDING'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5} 
                  placeholder="Project scopes, operational questions, or connection details..."
                  disabled={status === 'PENDING'}
                />
              </div>

              {status === 'ERROR' && (
                <div className="form-status error">
                  <AlertCircle size={18} />
                  <p>{errorMessage}</p>
                </div>
              )}

              <button 
                type="submit" 
                className="submit-btn" 
                disabled={status === 'PENDING'}
              >
                {status === 'PENDING' ? 'Transmitting...' : 'Send Message'}
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;