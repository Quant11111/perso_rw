import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        name: 'String',
        price: 3836549.7952643014,
        deliveryDelay: 3112781,
        updatedAt: '2024-06-08T00:00:13.965Z',
      },
    },
    two: {
      data: {
        name: 'String',
        price: 7085308.343557018,
        deliveryDelay: 4143545,
        updatedAt: '2024-06-08T00:00:13.965Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
