import { Button } from '@mui/material'

interface AppbarButtonProps {
  label: string
  onClick?: () => void
  variant?: 'text' | 'outlined' | 'contained'
  isActive?: boolean
}

const AppbarButton = ({
  label,
  onClick,
  isActive,
  variant = 'text',
}: AppbarButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? 'contained' : variant}
      color={isActive ? 'primary' : undefined}
    >
      {label}
    </Button>
  )
}

export default AppbarButton
