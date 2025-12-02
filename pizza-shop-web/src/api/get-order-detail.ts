import { api } from '@/lib/axios'

export interface GetOrderDetailsRequest {
  orderId: string
}

export interface GetOrderDetailsReply {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsRequest) {
  const response = await api.get<GetOrderDetailsReply>(`/orders/${orderId}`)

  return response.data
}
