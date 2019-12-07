import CardGas from './card-gas'
import ContainerList from './container-list'
import Typography from './typography'
import { Gas } from '~/services/gas'

export default function ListItemGas({
  data,
  onUpdate,
}: {
  data: Gas[] | null
  onUpdate: () => void
}) {
  return (
    <ContainerList>
      <Typography
        color='dark'
        variant='3xl'
        style={{ marginTop: '20px', marginBottom: '30px' }}
      >
        Registros de gas {data?.length > 0 ?'-' :''} {data?.length}
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
          No se encuentran registros de gas
        </Typography>
      ) : data.length > 0 ? (
        data.map((gas, index) => (
          <CardGas onUpdate={onUpdate} key={index} data={gas} />
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
          No hay registros de gas disponibles
        </Typography>
      )}
    </ContainerList>
  )
}
