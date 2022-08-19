export type ProductResponse = {
  pid: number
  thumbnail: string
  name: string
  sold_count: number
  success_count: number
  marketplace_type: string
  prices: number[]
  created: number
  updated: number
  supplierinfo: {
    name: string
    url: string
    location: string
  }
}

export type ProductsResponse = {
  count: number
  timestamp: number
  data: ProductResponse[]
}