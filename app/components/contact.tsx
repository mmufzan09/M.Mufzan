'use client';
import React from 'react';

const ContactForm = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8 sm:py-12">
      <form
        action="https://formsubmit.co/muhmmd53678@gmail.com"
        method="POST"
        className="w-full max-w-md space-y-6 border border-purple-500 p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-purple-700/50"
      >
        <h2 className="text-3xl font-semibold text-center underline underline-offset-4 decoration-purple-500 mb-4">
          Get In Touch
        </h2>

        {/* Hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Thanks for contacting me!" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-black border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-black border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Write your message..."
          required
          className="w-full px-4 py-2 bg-black border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition resize-none"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 rounded-md transition duration-300 active:scale-95"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
