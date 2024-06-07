import type { Meta, StoryObj } from '@storybook/react'

import TechStackPage from './TechStackPage'

const meta: Meta<typeof TechStackPage> = {
  component: TechStackPage,
}

export default meta

type Story = StoryObj<typeof TechStackPage>

export const Primary: Story = {}
