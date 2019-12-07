import Container from '~/components/container'
import Input from '~/components/input'
import NavAdmin from '~/components/nav-admin'
import SectionContainer from '~/components/section-container'
import Typography from '~/components/typography'
import Button from '~/components/button'
import Form from '~/components/form'
import { useEffect, useState } from 'react'
import { request } from '~/services/request'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { GET_USER, GetUser, UPDATE_USER, UpdateUser } from '~/services/user'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Actualizar el usuario' },
    {
      name: 'description',
      content: 'Actulizar los campos de los usuario creados',
    },
  ]
}

const initialvalues = {
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  phone: '',
  street: '',
}

export default function UpdateUserPage() {
  const [values, setValues] = useState(initialvalues)
  const [error, setError] = useState<null | string>(null)
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const handleChange =
    (key: string) => (e: React.FormEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [key]: e.currentTarget.value,
      })
    }

  useEffect(() => {
    const getData = async () => {
      if (searchParams.get('id') === null) return
      const [, data] = await request<GetUser>(GET_USER, {
        id: searchParams.get('id') ?? '',
      })
      if (data?.data.getUser) {
        const { password, phone, username, firstname, lastname, street } =
          data.data.getUser
        setValues({
          password,
          phone,
          username,
          firstname,
          lastname,
          street,
        })
      }
    }
    getData()
  }, [])

  const handleSubmit = async () => {
    if (searchParams.get('id') === null) return
    const [err, data] = await request<UpdateUser>(UPDATE_USER, {
      id: searchParams.get('id') ?? '',
      input: { ...values },
    })
    if (data?.errors) {
      setError(data?.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.updateUser) {
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
            Modificar usuario
          </Typography>
          <Form>
            <Input
              value={values.firstname}
              onChange={handleChange('firstname')}
              size='md'
              placeholder='nombre completo'
              text='Nombre completo'
            />
            <Input
              value={values.lastname}
              onChange={handleChange('lastname')}
              size='md'
              placeholder='apellido completo'
              text='Apellido completo'
            />
            <Input
              value={values.username}
              onChange={handleChange('username')}
              size='md'
              placeholder='nombre de usuario'
              text='Nombre de Usuario'
            />
            <Input
              value={values.password}
              onChange={handleChange('password')}
              size='md'
              placeholder='contraseña de usuario'
              text='Contraseña'
            />
            <Input
              value={values.phone}
              onChange={handleChange('phone')}
              size='md'
              placeholder='numero de telefono'
              text='Numero de telefeno'
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
              Modificar usuario
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
