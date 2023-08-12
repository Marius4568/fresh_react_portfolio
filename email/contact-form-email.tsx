import React from 'react'

import { 
  Html,
  Head,
  Body,
  Heading,
  Hr,
  Container,
  Section,
  Preview,
  Text
} from '@react-email/components'

import { Tailwind } from '@react-email/tailwind'

interface contactFormEmailProps { 
  message: string,
  senderEmail: string
}

export default function ContactFormEmail({ 
  message, senderEmail
}: contactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind >
      <Preview>
        New message from your portfolio site
      </Preview>
      <Body className='bg-gray-100 text-black'>
        <Container>
          <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
            <Heading className='leading-tight'>You received the following message from the contact form</Heading>
            <Text>
              {message}
            </Text>
            <Hr />
            <Text>The sender's email is {senderEmail }</Text>
          </Section>
        </Container>
        </Body>
        </Tailwind>
   </Html>
  )
}
