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
          <svg viewBox='0 0 512 512'>
            <path d='M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256  16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z' />
          </svg>
          <Typography style={{ marginBottom: '12px' }} as='h2' color='dark'>
            Iniciar Sesión
          </Typography>
          <Input
            text='Nombre de usuario'
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            name='username'
            type='text'
            placeholder='nombre de usuario'
          />
          <Input
            text='Contraseña'
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
        <footer>Consejo Comunal Nuestra Señora de la Chiquinquirá</footer>
      </SectionContainer>
    </Container>
  )
}
