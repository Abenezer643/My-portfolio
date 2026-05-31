import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'fb4ef69f-150c-40e6-8ca1-6a606f37500c');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message Sent Successfully!');
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      setResult('An error occurred. Please try again later.');
    }

    // Clear message after 3 seconds
    setTimeout(() => {
      setResult('');
    }, 3000);
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
                href="mailto:Abemelekdereje@gmail.com"
                className="text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                Abemelekdereje@gmail.com
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
                href="tel:+251979857886"
                className="text-lg text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                +251 979 857 886
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

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-gray-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-black/10 dark:shadow-white/10"
              >
                Send Message
              </button>
              {result && (
                <span className="text-sm text-gray-600 dark:text-gray-300">
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
