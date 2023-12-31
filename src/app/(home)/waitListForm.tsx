import {
  Button,
  Heading,
  RifaaqIcon,
  Maxwidth,
  Paragraph,
  GetStarted,
} from '@/components'
import { useForm } from 'react-hook-form'
import tw from 'twin.macro'
import { waitListInput } from '../../../types/waitlistInput'
import useJoinWaitList from './useJoinWaitList'

const WaitListForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<waitListInput>({
  //   defaultValues: {
  //     email: '',
  //     nickname: '',
  //   },
  // })

  // const { mutate: join, isLoading } = useJoinWaitList()

  // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // const subscribe = (data: waitListInput) => {
  //   join(data, {
  //     onSuccess: () => reset(),
  //   })
  // }

  return (
    <Maxwidth
      as="section"
      id="join-waitlist"
      tw="py-14 px-6 md:(px-10 py-[4.25rem]) 2xl:(py-[5.16rem] px-[6.25rem])"
    >
      <div
        // onSubmit={handleSubmit(subscribe)}
        tw="w-full relative overflow-hidden px-4 py-[6.25rem] flex flex-col gap-6 rounded-[0.75rem] text-white text-center bg-customGrey bg-cover bg-no-repeat  lg:(gap-4 py-[4.5rem])"
      >
        <RifaaqIcon tw="absolute -top-[3rem] -right-[3rem] 2xl:(-top-[6rem] -right-[6rem])" />
        <RifaaqIcon tw="absolute -bottom-[3rem] -left-[3rem] 2xl:(-bottom-[6rem] -left-[6rem])" />

        <div tw="max-w-[44rem] mx-auto flex flex-col gap-4">
          <Heading as="label" htmlFor="email">
            Start a unique journey on Acco today!
          </Heading>
          <Paragraph tw="pb-6 lg:(pb-8)">
            Are you ready to embark on a transformative journey towards becoming
            the best version of yourself? Click the button below on your mobile
            to install Acco-Rifaaq - the ultimate companion for your spiritual
            growth and all-round development.
          </Paragraph>
        </div>

        <GetStarted tw="w-full max-w-[250px] mx-auto" />

        {/* <div tw="flex flex-col items-center justify-stretch gap-4 w-full max-w-[35rem] mx-auto">
          <Input
            type="text"
            placeholder="Name/Qunya"
            {...register('nickname', { required: true, minLength: 3 })}
            css={[errors?.nickname && tw`border border-[red]`]}
          />
          <Input
            type="text"
            placeholder="Email"
            {...register('email', { required: true, pattern: emailPattern })}
            css={[errors?.email && tw`border border-[red]`]}
          />

          <Button
            disabled={isLoading}
            tw="text-lg whitespace-nowrap px-0 w-full md:(max-w-[17.2rem]) ml-auto"
          >
            Join Now
          </Button>
        </div> */}
      </div>
    </Maxwidth>
  )
}

const Input = tw.input`bg-white w-full rounded-[1rem] p-[0.88rem] text-black lg:(p-[1.5rem] text-xl)`

export default WaitListForm
