import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        updatedAt: '2024-06-08T00:00:00.151Z',
        content: 'String',
        user: {
          create: {
            name: 'String5776624',
            hashedPassword: 'String',
            salt: 'String',
            role: 'ADMIN',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-06-08T00:00:00.151Z',
        content: 'String',
        user: {
          create: {
            name: 'String8197291',
            hashedPassword: 'String',
            salt: 'String',
            role: 'ADMIN',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
