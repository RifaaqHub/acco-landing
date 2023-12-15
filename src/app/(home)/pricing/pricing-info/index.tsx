'use client'

import { useToggle } from 'usehooks-ts'
import { useState } from 'react'
import tw from 'twin.macro'
import { FaCheck } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'

import freeBg from './pricing-patterns/free.png'
import basicBg from './pricing-patterns/basic.png'
import premiumBg from './pricing-patterns/premium.png'
import { Button, Heading, Paragraph } from '@/components'
import { formatToNaira } from '@/lib/helpers'
import Toggle from '@/components/toggle'
import { routes } from '@/lib/routes'

const PricingInfo = () => {
  const [annually, toggleAnnualy] = useToggle(false)
  const [selectedPlan, setSelectedPlan] = useState(data?.[1] ?? data[1])

  const Icons = {
    true: <FaCheck size={16} />,
    false: <AiOutlineClose size={16} tw="text-[red]" />,
  }

  const getPlanInfo = (option: (typeof data)[0]) => {
    const {
      name,
      amount,
      max_circle,
      private_task,
      max_monthly_template,
      circle_based_tasks,
      plan_id,
      id,
    } = option

    return [
      <>
        {Icons['true']} {max_circle} Circle
      </>,
      <>{Icons['true']} Unlimited tasks in template</>,
      <>{Icons['true']} Notifications for Reminders</>,
      <>
        {Icons[max_monthly_template ? 'true' : 'false']} {max_circle} Free
        templates Monthly
      </>,
      <>
        {Icons[circle_based_tasks ? 'true' : 'false']}{' '}
        {circle_based_tasks ? '' : 'No'} Circle based tasks
      </>,
      <>
        {Icons[private_task ? 'true' : 'false']} {private_task ? '' : 'No'}{' '}
        Private tasks
      </>,
    ]
  }

  const handleUpgrade = async () => {}

  return (
    <div tw="py-6 flex flex-col gap-6">
      <div>
        <Heading $variant="h3" as="h3">
          We’ve got the perfect plans for you.
        </Heading>
        <Paragraph>choose the plan that works for you the most.</Paragraph>
      </div>

      <div tw="flex items-center justify-center gap-4 px-4">
        <Paragraph tw="font-calm">Monthly</Paragraph>
        <Toggle status={annually} handleToggle={toggleAnnualy} />
        <Paragraph tw="font-calm">Annually</Paragraph>
      </div>

      <div tw="flex justify-between bg-secondary px-4 text-primary py-2  lg:(hidden)">
        {data?.map(plan => (
          <button
            onClick={() => setSelectedPlan(plan)}
            tw="px-[0.66rem] pt-1 pb-[0.44rem]"
            css={[
              plan.name === selectedPlan.name &&
                tw`border-b-2 border-b-primary font-semibold`,
            ]}
          >
            {plan.name === 'Freemium' ? 'Free' : plan.name}
          </button>
        ))}
      </div>

      <div tw="flex items-start justify-center flex-wrap gap-6">
        {data.map(plan => {
          let pattern = freeBg,
            name = plan.name,
            isSelected = name === selectedPlan.name

          switch (name) {
            case 'Basic':
              pattern = basicBg
              break
            case 'Premium':
              pattern = premiumBg
              break

            default:
              break
          }

          return (
            <div
              key={name}
              tw="flex-1 border border-customGrey rounded-b-[.5rem] min-w-[280px] overflow-hidden"
              css={[isSelected && tw`bg-primary text-white`]}
              onClick={() => setSelectedPlan(plan)}
            >
              <div
                css={{ background: `url(${pattern.src})` }}
                tw="h-[4.37rem] w-full object-cover"
              />

              <div tw="pt-6 pb-12 px-4 flex flex-col gap-6 text-left">
                {(() => {
                  const { name, amount } = plan
                  return (
                    <>
                      <div tw="flex justify-between items-center">
                        <Paragraph
                          tw="font-calm"
                          css={[
                            tw`bg-[#2B2D3099] py-2 px-8 rounded-full text-white`,
                            name === 'Basic' && tw`bg-secondary text-primary`,
                            name === 'Premium' && tw`bg-primary text-white`,
                          ]}
                        >
                          {name}
                        </Paragraph>
                        <Paragraph tw="font-calm">
                          ₦{formatToNaira(amount)}
                        </Paragraph>
                      </div>

                      <div tw="flex flex-col gap-4">
                        {getPlanInfo(plan).map((info, idx) => (
                          <Paragraph tw="flex items-center gap-4" key={idx}>
                            {info}
                          </Paragraph>
                        ))}
                      </div>

                      <Button as={'a'} href={routes.liveApp.path}>
                        {name !== 'Freemium' ? 'Upgrade' : 'Start'} Now
                      </Button>
                    </>
                  )
                })()}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const data = [
  {
    name: 'Freemium',
    max_circle: 1,
    private_task: false,
    max_monthly_template: 2,
    circle_based_tasks: false,
    amount: 0,
  },
  {
    id: 3,
    name: 'Basic',
    max_circle: 5,
    private_task: false,
    max_monthly_template: 4,
    circle_based_tasks: false,
    amount: 300000,
    plan_id: 'PLN_o6g0zld4024buj4',
  },
  {
    id: 4,
    name: 'Premium',
    max_circle: 10,
    private_task: true,
    max_monthly_template: 10,
    circle_based_tasks: true,
    amount: 500000,
    plan_id: 'PLN_knwks6q083elxe7',
  },
]

export default PricingInfo
