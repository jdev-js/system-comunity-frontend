import CardUser from './card-user'
import ContainerList from './container-list'
import Typography from './typography'
import { User } from '~/services/user'

export default function ListItemUser({
  data,
  onUpdate,
}: {
  data: User[] | null
  onUpdate: () => void
}) {
  return (
    <ContainerList>
      <Typography
        color='dark'
        variant='3xl'
        style={{ marginTop: '20px', marginBottom: '30px' }}
      >
        Usuarios registrados {data?.length && '-' } {data?.length}
      </Typography>
      {data === null ? (
        <Typography
          color='dark'
          variant='3xl'
          style={{
            marginTop: '20px',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          No se encuentran usuarios
        </Typography>
      ) : data.length > 0 ? (
        data.map((user, index) => (
          <CardUser onUpdate={onUpdate} key={index} data={user} />
        ))
      ) : (
        <Typography
          color='dark'
          variant='3xl'
          style={{
            marginTop: '20px',
            marginBottom: '30px',
            textAlign: 'center',
          }}
        >
          No hay usuarios registrados
        </Typography>
      )}
    </ContainerList>
  )
}
