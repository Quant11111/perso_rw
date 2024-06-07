import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const TechStackPage = () => {
  return (
    <>
      <Metadata title="TechStack" description="TechStack page" />

      <h1>TechStackPage</h1>
      <p>
        Find me in <code>./web/src/pages/TechStackPage/TechStackPage.tsx</code>
      </p>
      <p>
        My default route is named <code>techStack</code>, link to me with `
        <Link to={routes.techStack()}>TechStack</Link>`
      </p>
    </>
  )
}

export default TechStackPage
