import { Jefe } from '~/services/jefe'
import CardJefe from './card-jefe'
import ContainerList from './container-list'
import Typography from './typography'

export default function ListItemJefe({
  data,
  onUpdate,
}: {
  data: Jefe[] | null
  onUpdate: () => void
}) {
  return (
    <ContainerList>
      <Typography
        color='dark'
        variant='3xl'
        style={{ marginTop: '20px', marginBottom: '30px' }}
      >
        Jefes de familia
      </Typography>
      {data === null ? (
        <Typography
          color='dark'
          variant='3xl'
          style={{ marginTop: '20px', marginBottom: '30px' }}
        >
          No se encuentran jefes de familia
        </Typography>
      ) : data.length > 0 ? (
        data.map((jefe, index) => (
          <CardJefe onUpdate={onUpdate} key={index} data={jefe} />
        ))
      ) : (
        <Typography
          color='dark'
          variant='3xl'
          style={{ marginTop: '20px', marginBottom: '30px' }}
        >
          No hay jefes de familia registrados
        </Typography>
      )}
    </ContainerList>
  )
}
