import { useEffect, useState } from 'react'
import Container from '~/components/container'
import ListItemMiembro from '~/components/list-item-miembro'
import NavAdmin from '~/components/nav-admin'
import Typography from '~/components/typography'
import {
  GET_MIEMBROS,
  Miembro,
  GET_MIEMBROS_ALL,
  GET_MIEMBROS_USER,
  GetMiembros,
  GetMiembrosAll,
  GetMiembrosUser,
} from '~/services/miembro'
import { request } from '~/services/request'
import type { MetaFunction } from '@remix-run/node'
import useAuth from '~/hooks/useAuth'
import { useSearchParams } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Datos de miembros de familia' },
    {
      name: 'description',
      content: 'Ver todos los datos de los miembros de familia',
    },
  ]
}

export default function GetMiembrosPage() {
  const [data, setData] = useState<Miembro[] | null>(null)
  const [error, setError] = useState<string | null>()
  const Auth = useAuth()
  const [searchParams] = useSearchParams()

  const getMiembrosAll = async () => {
    const [err, data] = await request<GetMiembrosAll>(GET_MIEMBROS_ALL)
    if (data?.errors) {
      setError(data.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.getMiembrosAll) {
      setData(data.data.getMiembrosAll)
    }
  }

  const getMiembroUser = async () => {
    const [err, data] = await request<GetMiembrosUser>(GET_MIEMBROS_USER, {
      idUser: Auth?.auth?.id ?? '',
    })
    if (data?.errors) {
      setError(data.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.getMiembrosUser) {
      setData(data.data.getMiembrosUser)
    }
  }

  const getMiembrosJefe = async () => {
    const [err, data] = await request<GetMiembros>(GET_MIEMBROS, {
      ciJefe: searchParams.get('ciJefe') ?? '',
    })
    if (data?.errors) {
      setError(data.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.getMiembros) {
      setData(data.data.getMiembros)
    }
  }

  const handleOnUpdate = () => {
    if (Auth?.auth?.role === 'super-user' && !searchParams.get('ciJefe')) {
      getMiembrosAll()
    } else if (Auth?.auth?.role === 'user' && !searchParams.get('ciJefe')) {
      getMiembroUser()
    } else {
      if (searchParams.get('ciJefe')) {
        getMiembrosJefe()
      } else {
        getMiembroUser()
      }
    }
  }

  useEffect(() => {
    handleOnUpdate()
  }, [])

  return (
    <Container>
      <NavAdmin />
      {error !== null && (
        <ListItemMiembro onUpdate={handleOnUpdate} data={data} />
      )}
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
