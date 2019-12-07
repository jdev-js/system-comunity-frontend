import { DELETE_JEFE, DeleteJefe, Jefe } from '~/services/jefe'
import Button from './button'
import './component.css'
import { request } from '~/services/request'
import Typography from './typography'
import { useNavigate } from '@remix-run/react'
import { PencilIcon } from './icons/pencil'
import { XCircleIcon } from './icons/x-circle'
import { UserGroupIcon } from './icons/user-group'

export default function CardJefe({
  data,
  onUpdate,
}: {
  data: Jefe
  onUpdate: () => void
}) {
  const navigate = useNavigate()

  const mediaQuery = window.matchMedia('(max-width: 500px)')

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
        <Typography as='h4' variant='md' color='dark'>
          Nombre
        </Typography>
        <Typography as='p' variant='sm' color='dark'>
          {data.firstname.length < 12
            ? data.firstname
            : data.firstname.slice(0, 15).concat('...')}
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
            <Typography as='h4' variant='md' color='dark'>
              TD
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.typeDocument}
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
            <Typography as='h4' variant='lg' color='dark'>
              Nro compras
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.numberBuy}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Nro casa
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.numberHome}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Nro casa
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.numberHome}
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
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Calle
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.street}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Dirección
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.address}
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
        <Button color='secondary' size='icon' onClick={handleNucleo}>
          <UserGroupIcon />
        </Button>
      </div>
    </article>
  )
}
