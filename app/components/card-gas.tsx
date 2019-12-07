import Button from './button'
import './component.css'
import { request } from '~/services/request'
import Typography from './typography'
import { DELETE_GAS, DeleteGas, Gas } from '~/services/gas'
import { useNavigate } from '@remix-run/react'
import { PencilIcon } from './icons/pencil'
import { XCircleIcon } from './icons/x-circle'

export default function CardGas({
  data,
  onUpdate,
}: {
  data: Gas
  onUpdate: () => void
}) {
  const navigate = useNavigate()
  const mediaQuery = window.matchMedia('(max-width: 500px)')
  const handleDelete = async () => {
    const [, dataGas] = await request<DeleteGas>(DELETE_GAS, {
      id: data.id,
    })
    if (dataGas?.data.deleteGas) {
      onUpdate()
    }
  }

  const handleUpdate = () => {
    navigate(`/update-gas?id=${data.id}`)
  }

  return (
    <article className='card-info-person'>
      <div className='card-container-info'>
        <Typography as='h4' variant='md' color='dark'>
          Cedula jefe de familia
        </Typography>
        <Typography as='p' variant='sm' color='dark'>
          {data.ciJefeFamily}
        </Typography>
      </div>
      <div className='card-container-info'>
        <Typography as='h4' variant='md' color='dark'>
          Nro casa
        </Typography>
        <Typography as='p' variant='sm' color='dark'>
          {data.numberHome}
        </Typography>
      </div>
      {mediaQuery.matches ? (
        <></>
      ) : (
        <>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Gas comunal
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.gasComunal}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Gas coperativa
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.gasCoperativa}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='lg' color='dark'>
              Tamaño del cilindro
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.sizeLengthGas}
            </Typography>
          </div>
          <div className='card-container-info'>
            <Typography as='h4' variant='md' color='dark'>
              Total de cilindros
            </Typography>
            <Typography as='p' variant='sm' color='dark'>
              {data.totalCilindros}
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
