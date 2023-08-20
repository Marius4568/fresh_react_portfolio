import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps { 
  elements: string[];
  className?: string;
}

export default function Dropdown({ 
  elements,
  className
}: DropdownProps) {
const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

const closeDropdown = (event: MouseEvent) => {
  if (
    dropdownRef.current &&
    buttonRef.current &&
    !dropdownRef.current.contains(event.target as Node) && 
    !buttonRef.current.contains(event.target as Node)
  ) {
    setIsOpen(false);
  }
};

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className={`relative ${className}`}>
      <button 
        onClick={toggleDropdown} 
        ref={buttonRef} 
        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
      >
        more...
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            ref={dropdownRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            transition={{ duration: 0.3 }}
            className='absolute z-10 mt-2 w-48 bg-black text-[0.7rem] uppercase tracking-wider text-white rounded-lg shadow-md dark:text-white/70'>
            {elements.map((element, index) => (<li key={index} className="block px-4 py-2">{element}</li>)) }
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
