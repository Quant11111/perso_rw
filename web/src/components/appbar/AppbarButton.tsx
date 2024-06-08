import { Button } from '@mui/material'

interface AppbarButtonProps {
  label: string
  onClick?: () => void
}

const AppbarButton = ({ label, onClick }: AppbarButtonProps) => {
  return <Button onClick={onClick}>{label}</Button>
}

export default AppbarButton
