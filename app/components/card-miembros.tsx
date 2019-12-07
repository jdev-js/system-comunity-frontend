import Button from './button'
import './component.css'
import { request } from '~/services/request'
import Typography from './typography'
import { DELETE_MIEMBRO, DeleteMiembro, Miembro } from '~/services/miembro'
import { useNavigate } from '@remix-run/react'
import { PencilIcon } from './icons/pencil'
import { XCircleIcon } from './icons/x-circle'

export default function CardMiembro({
  data,
  onUpdate,
}: {
  data: Miembro
  onUpdate: () => void
}) {
  const navigate = useNavigate()
  const mediaQuery = window.matchMedia('(max-width: 500px)')
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

  return (
    <article className='card-info-person'>
      <div className='card-container-info'>
        <Typography as='h4' variant='md' color='dark'>
          Nombre
        </Typography>
        <Typography as='p' variant='sm' color='dark'>
          {data.firstname}
        </Typography>
      </div>
      <div className='card-container-info'>
        <Typography as='h4' variant='md' color='dark'>
          Apellido
        </Typography>
        <Typography as='p' variant='sm' color='dark'>
          {data.lastname}
        </Typography>
      </div>
      {mediaQuery.matches ? (
        <></>
      ) : (
        <>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Edad
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.age}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Cedula
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.ci}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Fecha nacimiento
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.dateNacimiento}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Telefeno o Email
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.phone}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Sexo
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.sexo}
            </Typography>
          </div>
        </>
      )}
      <div className='card-container-button'>
        <Button onClick={handleUpdate} color='primary' size='icon'>
          <PencilIcon />
        </Button>
        <Button onClick={handleDelete} color='error' size='icon'>
          <XCircleIcon />
        </Button>
      </div>
    </article>
  )
}
