import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String6183725',
        hashedPassword: 'String',
        salt: 'String',
        role: 'ADMIN',
      },
    },
    two: {
      data: {
        name: 'String2297825',
        hashedPassword: 'String',
        salt: 'String',
        role: 'ADMIN',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
