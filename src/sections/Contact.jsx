import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formData = new FormData(event.target);

    // Add access key from environment variable
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setResult('Configuration error. Please contact the administrator.');
      setIsSubmitting(false);
      return;
    }

    formData.append('access_key', accessKey);

    // Add submission date/time
    formData.append('subject', `New Portfolio Contact Message from ${formData.get('name')}`);
    formData.append('from_name', formData.get('name'));
    formData.append('reply_to', formData.get('email'));
    formData.append('date', new Date().toLocaleString());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Your message has been sent successfully. I\'ll get back to you soon.');
        event.target.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
          setResult('');
        }, 5000);
      } else {
        console.log('Error', data);
        setResult(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setResult('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out
          and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none">
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Contact Information
          </h3>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-900 dark:text-white">
              <FaEnvelope size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a
                href="mailto:abenezersolomon643@gmail.com"
                className="text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                abenezersolomon643@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-900 dark:text-white">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <a
                href="tel:+251901535629"
                className="text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                +251 901 535 629
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-900 dark:text-white">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-lg block text-gray-900 dark:text-white">
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-[1.5]">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors placeholder:text-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-white/30 transition-colors resize-none placeholder:text-gray-400"
                placeholder="Let's build something amazing together..."
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-gray-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-black/10 dark:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {result && (
                <span className={`text-sm ${result.includes('error') || result.includes('failed') || result.includes('Configuration') ? 'text-red-500' : 'text-green-500 dark:text-green-400'}`}>
                  {result}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
