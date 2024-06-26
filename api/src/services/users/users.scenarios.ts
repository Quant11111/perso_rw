import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        name: 'String3390428',
        hashedPassword: 'String',
        salt: 'String',
        roles: 'String',
      },
    },
    two: {
      data: {
        name: 'String1703101',
        hashedPassword: 'String',
        salt: 'String',
        roles: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
