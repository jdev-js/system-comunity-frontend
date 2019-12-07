import { Miembro } from '~/services/miembro'
import ContainerList from './container-list'
import Typography from './typography'
import CardMiembro from './card-miembros'

export default function ListItemMiembro({
  data,
  onUpdate,
}: {
  data: Miembro[] | null
  onUpdate: () => void
}) {
  return (
    <ContainerList>
      <Typography
        color='dark'
        variant='3xl'
        style={{ marginTop: '20px', marginBottom: '30px' }}
      >
        Miembros de familia {data?.length && '-' } {data?.length}
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
          No se encuentran miembros de familia
        </Typography>
      ) : data.length > 0 ? (
        data.map((miembro, index) => (
          <CardMiembro onUpdate={onUpdate} key={index} data={miembro} />
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
          No hay miembros de familia registrados
        </Typography>
      )}
    </ContainerList>
  )
}
