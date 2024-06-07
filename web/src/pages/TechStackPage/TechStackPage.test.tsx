import { render } from '@redwoodjs/testing/web'

import TechStackPage from './TechStackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TechStackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TechStackPage />)
    }).not.toThrow()
  })
})
