import React from 'react'

export default function Footer() {
  return (
    <footer className='pb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>
        &copy; {new Date().getFullYear()}{' '} All rights reserved.
      </small>
      <p className='text-xs '>
        <span className='font-semibold'>
          Built with React & Next.js
        </span>
      </p>
    </footer>
  )
}
