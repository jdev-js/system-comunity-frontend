import { useEffect, useState } from 'react'
import Container from '~/components/container'
import ListItemGas from '~/components/list-item-gas'
import NavAdmin from '~/components/nav-admin'
import Typography from '~/components/typography'
import {
  GET_GAS_ALL,
  Gas,
  GET_GAS_USER,
  GetGasAll,
  GetGasUser,
} from '~/services/gas'
import { request } from '~/services/request'
import type { MetaFunction } from '@remix-run/node'
import useAuth from '~/hooks/useAuth'

export const meta: MetaFunction = () => {
  return [
    { title: 'Datos de sensos de gas' },
    {
      name: 'description',
      content: 'Ver todos los datos de los sensos de gas',
    },
  ]
}

export default function GetGasPage() {
  const [data, setData] = useState<Gas[] | null>(null)
  const [error, setError] = useState<string | null>()
  const Auth = useAuth()

  const getGasAll = async () => {
    const [err, data] = await request<GetGasAll>(GET_GAS_ALL)
    if (data?.errors) {
      setError(data.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.getGasAll) {
      setData(data.data.getGasAll)
    }
  }

  const getGasUser = async () => {
    const [err, data] = await request<GetGasUser>(GET_GAS_USER, {
      idUser: Auth?.auth?.id ?? '',
    })
    if (data?.errors) {
      setError(data.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.getGasUser) {
      setData(data.data.getGasUser)
    }
  }

  const handleOnUpdate = () => {
    if (Auth?.auth?.role === 'super-user') {
      getGasAll()
    } else {
      getGasUser()
    }
  }

  useEffect(() => {
    handleOnUpdate()
  }, [])

  return (
    <Container>
      <NavAdmin />
      {error !== null && <ListItemGas onUpdate={handleOnUpdate} data={data} />}
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
