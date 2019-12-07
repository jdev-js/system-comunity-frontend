import { DELETE_USER, DeleteUser, User } from '~/services/user'
import Button from './button'
import './component.css'
import { request } from '~/services/request'
import Typography from './typography'
import { useNavigate } from '@remix-run/react'
import { PencilIcon } from './icons/pencil'
import { XCircleIcon } from './icons/x-circle'

export default function CardJefe({
  data,
  onUpdate,
}: {
  data: User
  onUpdate: () => void
}) {
  const navigate = useNavigate()
  const mediaQuery = window.matchMedia('(max-width: 500px)')
  const handleDelete = async () => {
    const [, dataJefe] = await request<DeleteUser>(DELETE_USER, { id: data.id })
    if (dataJefe?.data.deleteUser) {
      onUpdate()
    }
  }
  const handleUpdate = () => {
    navigate(`/update-user?id=${data.id}`)
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
              Nombre de usuario
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.username}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Contraseña
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.password}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Contacto
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.phone}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Calle
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.street}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Jefes de familias
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.countJefes}
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
