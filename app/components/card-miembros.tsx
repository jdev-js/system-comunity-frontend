import Button from './button'
import './component.css'
import { request } from '~/services/request'
import Typography from './typography'
import { DELETE_MIEMBRO, DeleteMiembro, Miembro } from '~/services/miembro'
import { useNavigate } from '@remix-run/react'

export default function CardMiembro({
  data,
  onUpdate,
}: {
  data: Miembro
  onUpdate: () => void
}) {
  const navigate = useNavigate()
  const handleDelete = async () => {
    const [, dataJefe] = await request<DeleteMiembro>(DELETE_MIEMBRO, {
      id: data.id,
    })
    if (dataJefe?.data.deleteMiembro) {
      onUpdate()
    }
  }

  const handleUpdate = () => {
    navigate(`/update-miembro?id=${data.id}`)
  }

  console.log(data)

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
      </div>
    </article>
  )
}
