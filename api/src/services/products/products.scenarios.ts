import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        name: 'String',
        price: 79742.49939850297,
        deliveryDelay: 2386776,
        updatedAt: '2024-06-09T19:56:13.492Z',
      },
    },
    two: {
      data: {
        name: 'String',
        price: 6160602.977698477,
        deliveryDelay: 9516601,
        updatedAt: '2024-06-09T19:56:13.492Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
