'use client'

import React from 'react'
import { useTheme } from '@/context/theme-context';

interface BackgroundBlobProps { 
  color: string;
  colorDark: string;
  position: string;
}

export default function BackgroundBlob({ 
  color,
  colorDark,
  position
}: BackgroundBlobProps) { 
  const { theme } = useTheme()

  return <div style={{
    background: theme === 'light' ? color : colorDark
  }} className={`
 absolute top-[6rem] ${position === 'left' ? 'left-[10vw] animate-moveLeftBlob' : 'right-[10vw] animate-moveRightBlob'} h-[75vh] max-h-[75rem] -z-10 w-[40vw] rounded-full blur-[7rem] sm:blur-[10rem]  
`}></div>
}