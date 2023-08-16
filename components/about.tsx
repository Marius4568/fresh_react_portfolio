"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  
  const { ref } = useSectionInView('About')

  return (
    <motion.section ref={ref} id="about" className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}  
    >
      <SectionHeading>About me</SectionHeading>
      
<p className="mb-3">
    My journey into <span className="font-medium">web development</span> began in 2015 when my friend and I crafted websites for several local businesses. Although this experience sparked my interest, I ventured through diverse paths, including roles in <span className="font-medium">customer assistance</span> and in the military.
</p>

<p className="mb-3">
    Fast forward to 2021, my passion for coding took center stage. I delved deeper, learning frameworks like <span className="font-medium">ReactJS and VueJS</span>. After that, I enrolled in a 9-month intensive web development program. Completing it, I became part of the <span className="font-medium">Cherry Team</span>, sharpening my technical skills and understanding the nuances of team collaboration in a professional setting.
</p>

<p>
    <span className="italic">Beyond the world of code</span>, I find enjoyment in singing pop ballads. When I seek a break, anime is my go-to, with series like <span className="font-medium">"Code Geass", "Demon Slayer",</span> and <span className="font-medium">"Attack on Titan"</span> topping my list.
</p>
    </motion.section>
  )
}
