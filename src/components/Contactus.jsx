import React from 'react'
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';



function Contactus() {
    const [feedbackEmail, setFeedbackEmail] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackStatus, setFeedbackStatus] = useState('');
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_email: feedbackEmail,
          message: feedbackMessage,
        };

        emailjs.send('service_pcyocii', 'template_9fzm5ol', templateParams, 's22a2H5cebpHAWKK6')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFeedbackStatus('Feedback sent successfully!');
          setFeedbackEmail('');
          setFeedbackMessage('');
        }, (error) => {
          console.log('FAILED...', error);
          setFeedbackStatus('Failed to send feedback. Please try again.');
        });
    };
  return (
    <div>
  <footer className="footer  bg-gray-900 text-white p-10 flex flex-col items-center" style={{ fontFamily: '"Raleway", sans-serif' }}>
      <div className="footer-container flex flex-wrap justify-between w-full max-w-6xl">
        <div className="footer-section mb-6">
          <h4 className='flex items-center font-bold text-3xl mb-4'>Contact Us</h4>
          <p>Lucknow, UP</p>
          <p>Email: vishalmodanwal8572@gmail.com</p>
        </div>
        <div className="footer-section mb-6">
          <h4 className='font-bold text-xl mb-4'>Follow Us</h4>
          <a className="block mb-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="block" href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="footer-section mb-6">
          <h4 className='font-bold text-xl mb-4'>Your Feedback</h4>
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col space-y-4">
            <input
              className='p-2 border border-gray-300 rounded-md bg-gray-200 text-black'
              type="email"
              placeholder="Your email"
              value={feedbackEmail}
              onChange={(e) => setFeedbackEmail(e.target.value)}
              required
            />
            <textarea
              className='p-2 border border-gray-300 rounded-md bg-gray-200 text-black'
              placeholder="Your feedback"
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
              required
            ></textarea>
            <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200" type="submit">
              Submit
            </button>
          </form>
          {feedbackStatus && <p className="mt-2">{feedbackStatus}</p>}
        </div>
      </div>
      <div className="footer-bottom mt-6">
        <p>&copy; {new Date().getFullYear()} Shopnest.   Shop-Smart Shop-Nest :)</p>
      </div>
    </footer>

    </div>
  )
}

export default Contactus
