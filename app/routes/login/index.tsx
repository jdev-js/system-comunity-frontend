import './index.css'
import Button from '~/components/button'
import Input from '~/components/input'
import Typography from '~/components/typography'
import { useState } from 'react'
import Container from '~/components/container'
import SectionContainer from '~/components/section-container'
import { LOGIN, DataLogin } from '~/services/user'
import { request } from '~/services/request'
import { useNavigate } from '@remix-run/react'
import useAuth from '~/hooks/useAuth'

import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Iniciar Sesión' },
    {
      name: 'description',
      content:
        'Iniciar sesion, para poder administrar los datos de las personas de la comunidad',
    },
  ]
}

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const Auth = useAuth()
  const [error, setError] = useState<null | string>(null)
  const handleSubmit = async () => {
    const [err, data] = await request<DataLogin>(LOGIN, {
      username,
      password,
    })
    if (data) {
      if (data?.errors) {
        setError(data?.errors[0]?.message)
      } else if (err) {
        setError(err.message)
      } else {
        Auth?.changeAuth(data.data.login)
        navigate('/admin')
      }
    }
  }

  return (
    <Container style={{ height: '100vh' }}>
      <SectionContainer style={{ height: '100%' }}>
        <div className='form'>
          <Typography style={{ marginBottom: '12px' }} color='dark'>
            Iniciar Sesion
          </Typography>
          <Input
            text="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            name='username'
            type='text'
            placeholder='nombre de usuario'
          />
          <Input
            text="Contraseña"
            value={password}
            type='password'
            placeholder='contraseña de usuario'
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          {error && (
            <Typography
              as='p'
              variant='sm'
              style={{
                color: 'var(--text-error)',
                textAlign: 'center',
                margin: '5px auto',
              }}
            >
              {error}
            </Typography>
          )}
          <Button
            onClick={handleSubmit}
            style={{ marginTop: '10px' }}
            size='md'
            color='primary'
          >
            Login
          </Button>
        </div>
      </SectionContainer>
    </Container>
  )
}
