"use client"

// React Hook and Component Imports
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section 
      className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' 
      id='contact' 
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>
        Contact me
      </SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{" "}
        <a className='underline' href="mailto:marius.urbonas100@gmail.com">
          marius.urbonas100@gmail.com
        </a>
        {" "}or through this form.
      </p>

      <form 
        className='mt-10 flex flex-col dark:text-black' 
        action={async formData => {
          const { data, error } = await sendEmail(formData);

          if (error) { 
            toast.error(error)
            return
          }

          toast.success('Your message has been sent!')
         }
      }
      >
        <input 
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' 
          type="email" 
          required
          name='senderEmail'
          maxLength={320} 
          placeholder='Your email' 
        />

        <textarea  
          required 
          maxLength={5000}  
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' 
          name="message" 
          placeholder='Your message'
        />

      <SubmitBtn />
      </form>
    </motion.section>
  )
}
