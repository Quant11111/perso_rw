import EditTechnoCell from 'src/components/Techno/EditTechnoCell'

type TechnoPageProps = {
  id: string
}

const EditTechnoPage = ({ id }: TechnoPageProps) => {
  return <EditTechnoCell id={id} />
}

export default EditTechnoPage
