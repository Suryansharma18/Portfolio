import React from 'react'
import ContactText from './ContactText'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <ContactText />
      <ContactForm />
    </div>
  )
}

export default ContactMeLeft
