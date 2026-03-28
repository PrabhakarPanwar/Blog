import React from 'react'
import TeamSection from '../components/TeamSection';
import ContactForm from '../components/ContactForm';
import SideInfo from '../components/SideInfo';



function Contact() {
  return (
    <div>
      <div className="bg-stone-50 border-b border-stone-200 py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Get in touch</p>
          <h1
            className="text-4xl font-bold text-stone-900 leading-snug mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            We'd love to hear from you.
          </h1>
          <p className="text-stone-500 max-w-lg text-base leading-relaxed">
            Whether you have a story to share, a question about our work, or just want to say hello — our inbox is always open.
          </p>
        </div>
      </div>
      <ContactForm />
      <SideInfo />
      <TeamSection />
    </div>
  )
}

export default Contact