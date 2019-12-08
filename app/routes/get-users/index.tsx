import { useEffect, useState } from 'react'
import Container from '~/components/container'
import NavAdmin from '~/components/nav-admin'
import Typography from '~/components/typography'
import { GET_USERS, GetUsers, User } from '~/services/user'
import { request } from '~/services/request'
import ListItemUser from '~/components/list-item-user'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Datos de Usuarios' },
    {
      name: 'description',
      content: 'Ver todos los datos de los usuarios registrados',
    },
  ]
}

export default function GetUserPage() {
  const [data, setData] = useState<User[] | null>(null)
  const [error, setError] = useState<string | null>()

  const handleOnUpdate = async () => {
    const getData = async () => {
      const [, data] = await request<GetUsers>(GET_USERS)
      if (data?.errors) {
        setError(data.errors[0].message)
      }
      if (data?.data) {
        setData(data.data.getUsers)
      }
    }
    getData()
  }

  useEffect(() => {
    handleOnUpdate()
  }, [])

  return (
    <Container>
      <NavAdmin />
      {error !== null && <ListItemUser onUpdate={handleOnUpdate} data={data} />}
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
