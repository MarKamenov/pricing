export interface Feature {
  name: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  isHighlighted: boolean
  features: Feature[]
}