"use client"

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {

  const { ref } = useSectionInView('Home', 0.5)

  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <section ref={ ref } id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex flex-col items-center justify-center gap-2'>
                 
        <div className='relative z-2'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          >
            <Image
          src='/profile-pic.jpg'
          alt="Marius profile photo"
          width={192}
          height={192}
          quality={95}
          priority={true}
          className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cove'
        />
          </motion.div>
          <motion.span className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
          👋
        </motion.span>
        </div>
        <motion.div className='relative z-1 flex gap-3'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
          }}
        >
          <a href="https://www.linkedin.com/in/marurb/"
            target="_blank"
        className="group bg-white px-3 py-3 text-gray-700 flex items-center gap-2 rounded-full text-[1.1rem] self-end focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 outline-none transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin/>
        </a>
        
          <a href="https://github.com/Marius4568"
            target="_blank"
       className="bg-white px-3 py-3 text-gray-700 flex items-center gap-2 rounded-full text-[1.3rem] self-end focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 outline-none transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare/>
        </a>
        </motion.div>
            
      </div>
            <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Marius.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My current focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => { 
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
          href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
          Contact me here 
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>
        <a
          href="/Marius_Urbonas_CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"
        >
          Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-[0.2rem] transition'/>
        </a>
       
      </motion.div>
    </section>
  )
}