import { DELETE_JEFE, DeleteJefe, Jefe } from '~/services/jefe'
import Button from './button'
import './component.css'
import { request } from '~/services/request'
import Typography from './typography'
import { useNavigate } from '@remix-run/react'

export default function CardJefe({
  data,
  onUpdate,
}: {
  data: Jefe
  onUpdate: () => void
}) {
  const navigate = useNavigate()

  const handleDelete = async () => {
    const [, dataJefe] = await request<DeleteJefe>(DELETE_JEFE, { id: data.id })
    if (dataJefe?.data.deleteJefe) {
      onUpdate()
    }
  }

  const handleUpdate = () => {
    navigate(`/update-jefe?id=${data.id}`)
  }

  const handleNucleo = () => {
    navigate(`/get-miembros?ciJefe=${data.ci}`)
  }

  return (
    <article className='card-info-person'>
      <div className='card-container-info'>
        <h4>
          {data.firstname} {data.lastname}
        </h4>
        <p>{data.ci}</p>
      </div>
      <div className='card-container-info'>
        <Typography as='h4' color='dark'>
          Fecha de nacimiento
        </Typography>
        <Typography as='p' variant='md' color='dark'>
          {data.dateNacimiento}
        </Typography>
      </div>
      <div className='card-container-info'>
        <Typography as='h4' color='dark'>
          Edad
        </Typography>
        <Typography as='p' variant='md' color='dark'>
          {data.age}
        </Typography>
      </div>
      <div className='card-container-button'>
        <Button onClick={handleUpdate} color='primary' size='sm'>
          Editar
        </Button>
        <Button onClick={handleDelete} color='error' size='sm'>
          Eliminar
        </Button>
        <Button color='primary' size='md' onClick={handleNucleo}>
          Nucleo
        </Button>
      </div>
    </article>
  )
}
