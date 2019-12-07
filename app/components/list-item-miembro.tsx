import ContainerList from './container-list'
import Typography from './typography'

export default function ListItemMiembro({ data }) {
  return (
    <ContainerList>
      <Typography
        color='dark'
        variant='3xl'
        style={{ marginTop: '20px', marginBottom: '30px' }}
      >
        Miembros de familia
      </Typography>
    </ContainerList>
  )
}
