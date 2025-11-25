import { api } from '@/lib/axios'

export interface GetManagedRestaurantBody {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantBody>(
    '/managed-restaurant'
  )

  return response.data
}
