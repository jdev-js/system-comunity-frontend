import CardJefe from './card-jefe'
import ContainerList from './container-list'
import Typography from './typography'

export default function ListItemJefe({ data }) {
  return (
    <ContainerList>
      <Typography
        color='dark'
        variant='3xl'
        style={{ marginTop: '20px', marginBottom: '30px' }}
      >
        Jefes de familia
      </Typography>
      {data.map((jefe, index) => (
        <CardJefe key={index} data={jefe} />
      ))}
    </ContainerList>
  )
}
