import type { Prisma, Techno } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TechnoCreateArgs>({
  techno: {
    one: {
      data: {
        name: 'String4893841',
        description: 'String',
        image: 'String',
        updatedAt: '2024-06-09T19:55:43.953Z',
      },
    },
    two: {
      data: {
        name: 'String2478305',
        description: 'String',
        image: 'String',
        updatedAt: '2024-06-09T19:55:43.953Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Techno, 'techno'>
