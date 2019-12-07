import './index.css'
import Button from '~/components/button'
import Input from '~/components/input'
import Typography from '~/components/typography'
import { useState } from 'react'
import Container from '~/components/container'
import SectionContainer from '~/components/section-container'
import { LOGIN, DataLogin } from '~/services/user'
import { request } from '~/services/request'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    const [err, data] = await request<DataLogin>(LOGIN, { username, password })
    if (err) {
      console.error(err)
    }
    console.log(data)
  }

  return (
    <Container>
      <SectionContainer>
        <div className='form'>
          <Typography style={{ marginBottom: '12px' }} color='dark'>
            Iniciar Sesion
          </Typography>
          <Input
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            name='username'
            type='text'
            placeholder='nombre de usuario'
          />
          <Input
            value={password}
            type='password'
            placeholder='contraseña de usuario'
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
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
