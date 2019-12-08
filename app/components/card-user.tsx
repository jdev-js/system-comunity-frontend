import { DELETE_USER, DeleteUser, User } from '~/services/user'
import Button from './button'
import './component.css'
import { request } from '~/services/request'
import Typography from './typography'
import { useNavigate } from '@remix-run/react'

export default function CardJefe({
  data,
  onUpdate,
}: {
  data: User
  onUpdate: () => void
}) {
  const navigate = useNavigate()
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
        <h4>
          {data.firstname} {data.lastname}
        </h4>
      </div>
      <Typography as='p' variant='md' color='dark'>
        {data.phone}
      </Typography>
      <Typography as='p' variant='md' color='dark'>
        {data.username}
      </Typography>
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
