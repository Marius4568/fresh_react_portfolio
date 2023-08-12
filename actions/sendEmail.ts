"use server"
    
import { getErrorMessage, validateFormData } from '@/lib/utils'
import { Resend } from 'resend'

import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  let data
   try {
       const [validatedMessage, validatedSenderEmail] = validateFormData(formData, [{name: 'message', maxLength: 1000}, {name: 'senderEmail', maxLength: 200}])
      
      data = await resend.emails.send({
        from: 'Contact form <onboarding@resend.dev>',
        to: 'mariolee303@gmail.com',
        subject: 'Hello from Resend',
        reply_to: validatedSenderEmail,
        react: React.createElement(ContactFormEmail, {
          message: validatedMessage,
          senderEmail: validatedSenderEmail,
        }) ,
      }) 
   } catch (error) {
     console.error('Error while sending email:', error);

     return {
       error: getErrorMessage(error)
     }
   }
  return {
    data
  }
}
