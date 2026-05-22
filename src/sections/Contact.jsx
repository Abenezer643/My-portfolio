import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Talk</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out
          and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 bg-white/5 border border-white/10 p-8 rounded-3xl">
        {/* Contact Info */}
        <div className="flex-1 space-y-8">
          <h3 className="text-2xl font-bold">Contact Information</h3>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
              <FaEnvelope size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a
                href="mailto:Abemelekdereje@gmail.com"
                className="text-lg hover:text-gray-300 transition-colors"
              >
                Abemelekdereje@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <a
                href="tel:+251979857886"
                className="text-lg hover:text-gray-300 transition-colors"
              >
                +251 979 857 886
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-lg block">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-[1.5]">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Let's build something amazing together..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
