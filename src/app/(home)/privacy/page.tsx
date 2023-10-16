'use client'

import { Heading, Maxwidth, Paragraph } from '@/components'

const PrivacyPolicy = () => {
  return (
    <Maxwidth tw="py-10 px-6 flex flex-col gap-4 lg:(p-[6.25rem] gap-6)">
      <Heading $variant="h4">Privacy Policy</Heading>
      <Paragraph>
        This Privacy Policy explains how [Your Company Name] ("we," "our," or
        "us") collects, uses, discloses, and protects your personal information
        when you use our mobile application (the "App").
      </Paragraph>

      <ol tw="list-decimal flex flex-col gap-3 lg:(gap-4)">
        {privacyContent.map((section, idx) => {
          const { title, par, list, stringList } = section

          return (
            <li key={idx}>
              <Heading as={'h2'} tw="text-lg">
                {title}
              </Heading>
              {par ? <Paragraph>{par}</Paragraph> : null}
              {list ? (
                <ol tw="list-[lower-latin] flex flex-col gap-2 lg:(gap-3)">
                  {list.map((entry, idx) => {
                    const { title, par, stringList } = entry

                    return (
                      <li key={idx}>
                        <Heading as="h3" tw="text-base">
                          {title}
                        </Heading>
                        {par ? <Paragraph>{par}</Paragraph> : null}
                        {stringList ? (
                          <ol tw="list-disc">
                            {stringList.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ol>
                        ) : null}
                      </li>
                    )
                  })}
                </ol>
              ) : null}
              {stringList ? (
                <ol tw="list-disc">
                  {stringList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              ) : null}
            </li>
          )
        })}
      </ol>
    </Maxwidth>
  )
}

const privacyContent = [
  {
    title: 'Information We Collect',
    list: [
      {
        title: ' Information You Provide',
        par: 'We may collect personal information that you voluntarily provide when using our App, which may include but is not limited to:',
        stringList: [
          'Your name',
          'Email address',
          'Phone number',
          'Profile picture',
          'Any other information you provide when using our App',
        ],
      },
      {
        title: 'Information Automatically Collected',
        par: 'When you use our App, we may automatically collect certain information about your device, including:',
        stringList: [
          'Device type',
          'Operating system',
          'Unique device identifiers',
          'IP address',
          'Mobile network information',
          'Usage data, such as the pages or screens you view, your interactions within the App, and other usage statistics',
        ],
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    par: 'We may use the information we collect for various purposes, including:',
    stringList: [
      'Providing, maintaining, and improving our App',
      'Personalizing your experience',
      'Sending you updates, notifications, and support messages',
      'Analyzing usage patterns and trends',
      'Complying with legal requirements',
      'Usage data, such as the pages or screens you view, your interactions within the App, and other usage statistics',
    ],
  },
  {
    title: 'Sharing Your Information',
    par: 'We may share your information with third parties in the following circumstances:',
    stringList: [
      'With your consent',
      'With service providers who assist us in providing and maintaining the App',
      'To comply with legal obligations',
      'In connection with a business transfer or merger',
    ],
  },
  {
    title: 'Data Security',
    par: 'We take reasonable measures to protect your personal information. However, please be aware that no method of data transmission or storage is 100% secure, and we cannot guarantee the security of your information.',
  },
  {
    title: 'Your Choices',
    par: 'You can always choose not to provide certain information, but this may limit your ability to use certain features of our App. You can also access, change, or delete your personal information within the App settings.',
  },
  {
    title: 'Contact Us',
    par: 'If you have any questions about this Privacy Policy or your personal information, please contact us at acco@rifaaq.com.',
  },
  {
    title: 'Changes to this Privacy Policy',
    par: 'We may update this Privacy Policy to reflect changes in our data practices. If we make significant changes, we will notify you by email or by posting a notice in the App.',
  },
  {
    title: 'Consent',
    par: 'By using our App, you consent to the collection and use of your personal information as outlined in this Privacy Policy.',
  },
]

export default PrivacyPolicy
