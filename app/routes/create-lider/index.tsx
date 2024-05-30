import Container from '~/components/container'
import Input from '~/components/input'
import NavAdmin from '~/components/nav-admin'
import SectionContainer from '~/components/section-container'
import Typography from '~/components/typography'
import Button from '~/components/button'
import Form from '~/components/form'
import { useState } from 'react'
import { request } from '~/services/request'
import { useNavigate } from '@remix-run/react'
import { CreateUser, REGISTER_USER } from '~/services/user'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Crear un nuevo lider de calle' },
    {
      name: 'description',
      content: 'Registrar un nuevo lider de calle',
    },
  ]
}

const initialvalues = {
  firstname: '',
  lastname: '',
  phone: '',
  username: '',
  street: '',
  password: '',
}
export default function CreateLiderPage() {
  const [values, setValues] = useState(initialvalues)
  const [error, setError] = useState<null | string>(null)

  const navigate = useNavigate()

  const handleChange =
    (key: string) => (e: React.FormEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [key]: e.currentTarget.value,
      })
    }

  const handleSubmit = async () => {
    const [err, data] = await request<CreateUser>(REGISTER_USER, {
      input: { ...values },
    })
    if (data?.errors) {
      setError(data?.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.register) {
      navigate('/get-users')
    }
  }

  return (
    <Container>
      <NavAdmin />
      <Container>
        <SectionContainer align='start'>
          <Typography
            color='dark'
            style={{ marginTop: '20px', marginBottom: '20px' }}
            variant='3xl'
          >
            Crear Lider de Calle
          </Typography>
          <Form>
            <Input
              text='Nombre completo'
              value={values.firstname}
              onChange={handleChange('firstname')}
              size='md'
              placeholder='nombre completo'
            />
            <Input
              text='Apellido completo'
              value={values.lastname}
              onChange={handleChange('lastname')}
              size='md'
              placeholder='apellido completo'
            />
            <Input
              text='Telefono o Email'
              value={values.phone}
              onChange={handleChange('phone')}
              size='md'
              placeholder='telefono o email'
            />
            <Input
              text='Contraseña de usuario'
              value={values.password}
              onChange={handleChange('password')}
              size='md'
              placeholder='contraseña de usuario'
            />
            <Input
              text='Nombre de usuario'
              value={values.username}
              onChange={handleChange('username')}
              size='md'
              placeholder='nombre de usuario'
            />
            <Input
              text='Numero de calle'
              value={values.street}
              onChange={handleChange('street')}
              size='md'
              placeholder='numero de calle'
            />
            <Button
              onClick={handleSubmit}
              style={{ marginTop: '20px' }}
              color='primary'
              size='lg'
            >
              Crear Lider
            </Button>
          </Form>
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
        </SectionContainer>
      </Container>
    </Container>
  )
}
