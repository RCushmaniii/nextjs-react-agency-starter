import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  company?: string | null
  website?: string | null
  interest?: string | null
  message: string
}

export const ContactEmail = ({
  name,
  email,
  company,
  website,
  interest,
  message,
}: ContactEmailProps) => {
  const previewText = `New project inquiry from ${name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              New Project Inquiry
            </Heading>

            <Text className="text-black text-[14px] leading-[24px]">
              You have received a new lead via the website contact form.
            </Text>

            <Section className="bg-gray-50 p-4 rounded-md border border-gray-100 mt-4">
              <Text className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">
                Sender Details
              </Text>
              <Text className="text-black text-sm font-medium m-0">{name}</Text>
              <Text className="text-black text-sm m-0 mb-4">{email}</Text>

              {company && (
                <>
                  <Text className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">
                    Company
                  </Text>
                  <Text className="text-black text-sm font-medium m-0 mb-4">{company}</Text>
                </>
              )}

              {website && (
                <>
                  <Text className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">
                    Website
                  </Text>
                  <Text className="text-black text-sm font-medium m-0 mb-4">{website}</Text>
                </>
              )}

              {interest && (
                <>
                  <Text className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">
                    Interest
                  </Text>
                  <Text className="text-black text-sm font-medium m-0 mb-4">{interest}</Text>
                </>
              )}
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Text className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-semibold">
              Message
            </Text>
            <Text className="text-black text-[14px] leading-[24px] whitespace-pre-wrap">
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
