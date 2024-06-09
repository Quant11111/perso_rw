import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        updatedAt: '2024-06-09T19:55:53.804Z',
        content: 'String',
        user: {
          create: {
            name: 'String9351808',
            hashedPassword: 'String',
            salt: 'String',
            roles: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-06-09T19:55:53.804Z',
        content: 'String',
        user: {
          create: {
            name: 'String2800816',
            hashedPassword: 'String',
            salt: 'String',
            roles: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
