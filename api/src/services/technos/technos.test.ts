import type { Techno } from '@prisma/client'

import {
  technos,
  techno,
  createTechno,
  updateTechno,
  deleteTechno,
} from './technos'
import type { StandardScenario } from './technos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('technos', () => {
  scenario('returns all technos', async (scenario: StandardScenario) => {
    const result = await technos()

    expect(result.length).toEqual(Object.keys(scenario.techno).length)
  })

  scenario('returns a single techno', async (scenario: StandardScenario) => {
    const result = await techno({ id: scenario.techno.one.id })

    expect(result).toEqual(scenario.techno.one)
  })

  scenario('creates a techno', async () => {
    const result = await createTechno({
      input: {
        name: 'String7777415',
        description: 'String',
        image: 'String',
        updatedAt: '2024-06-09T19:55:43.941Z',
      },
    })

    expect(result.name).toEqual('String7777415')
    expect(result.description).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2024-06-09T19:55:43.941Z'))
  })

  scenario('updates a techno', async (scenario: StandardScenario) => {
    const original = (await techno({ id: scenario.techno.one.id })) as Techno
    const result = await updateTechno({
      id: original.id,
      input: { name: 'String19210262' },
    })

    expect(result.name).toEqual('String19210262')
  })

  scenario('deletes a techno', async (scenario: StandardScenario) => {
    const original = (await deleteTechno({
      id: scenario.techno.one.id,
    })) as Techno
    const result = await techno({ id: original.id })

    expect(result).toEqual(null)
  })
})
