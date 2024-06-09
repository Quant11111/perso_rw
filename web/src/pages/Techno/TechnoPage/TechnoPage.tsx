import TechnoCell from 'src/components/Techno/TechnoCell'

type TechnoPageProps = {
  id: string
}

const TechnoPage = ({ id }: TechnoPageProps) => {
  return <TechnoCell id={id} />
}

export default TechnoPage
