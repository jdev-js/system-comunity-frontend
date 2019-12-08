import { useEffect, useState } from 'react'
import Container from '~/components/container'
import ListItemJefe from '~/components/list-item-jefe'
import NavAdmin from '~/components/nav-admin'
import Typography from '~/components/typography'
import {
  GET_JEFES,
  GET_JEFES_ALL,
  GetJefes,
  GetJefesAll,
  Jefe,
} from '~/services/jefe'
import { request } from '~/services/request'
import type { MetaFunction } from '@remix-run/node'
import useAuth from '~/hooks/useAuth'

export const meta: MetaFunction = () => {
  return [
    { title: 'Datos de jefes de familia' },
    {
      name: 'description',
      content: 'Ver todos los datos de los jefes de familia',
    },
  ]
}

export default function GetJefesPage() {
  const [data, setData] = useState<Jefe[] | null>(null)
  const [error, setError] = useState<string | null>()
  const Auth = useAuth()

  const getAllJefes = async () => {
    const [, data] = await request<GetJefesAll>(GET_JEFES_ALL)
    if (data?.errors) {
      setError(data.errors[0].message)
    }
    if (data?.data) {
      setData(data.data.getJefesAll)
    }
  }

  const getJefes = async () => {
    const [, data] = await request<GetJefes>(GET_JEFES, {
      idUser: Auth?.auth?.id ?? '',
    })
    if (data?.errors) {
      setError(data.errors[0].message)
    }
    if (data?.data) {
      setData(data.data.getJefes)
    }
  }

  const handleOnUpdate = () => {
    if (Auth?.auth?.role === 'super-user') {
      getAllJefes()
    } else {
      getJefes()
    }
  }

  useEffect(() => {
    if (Auth?.auth?.role === 'super-user') {
      getAllJefes()
    } else {
      getJefes()
    }
  }, [])

  return (
    <Container>
      <NavAdmin />
      {error !== null && <ListItemJefe onUpdate={handleOnUpdate} data={data} />}
      {error && (
        <Typography
          style={{
            margin: '10px auto',
            padding: '2px 8px',
            borderRadius: '5px',
            backgroundColor: 'var(--bg-error)',
            color: 'var(--text-error)',
          }}
          color='dark'
          as='p'
          variant='md'
        >
          {error}
        </Typography>
      )}
    </Container>
  )
}
