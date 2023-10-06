import axios from 'axios'
import { waitListInput } from '../../types/waitlistInput'

export const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_BASE_URL!,
})

export const joinWaitlist = async (data: waitListInput) => {
  const response = await service.post('/api/v1/users/waiting', data)

  return response.data
}
