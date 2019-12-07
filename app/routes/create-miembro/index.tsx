import Container from '~/components/container'
import Input from '~/components/input'
import NavAdmin from '~/components/nav-admin'
import SectionContainer from '~/components/section-container'
import Typography from '~/components/typography'
import Button from '~/components/button'
import Form from '~/components/form'
import { useState } from 'react'
import { request } from '~/services/request'
import { CREATE_MIEMBRO, CreateMiembro } from '~/services/miembro'
import { useNavigate } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'
import useAuth from '~/hooks/useAuth'

export const meta: MetaFunction = () => {
  return [
    { title: 'Crear un nuevo miembro de familia' },
    {
      name: 'description',
      content: 'Registrar un nuevo miembro de familia',
    },
  ]
}

const initialvalues = {
  firstname: '',
  lastname: '',
  phone: '',
  age: '',
  dateNacimiento: '',
  ciJefeFamily: '',
  discapacity: '',
  ci: '',
  sexo: '',
}

export default function CreateMiembroPage() {
  const [values, setValues] = useState(initialvalues)
  const [error, setError] = useState<null | string>(null)
  const Auth = useAuth()
  const navigate = useNavigate()

  const handleChange =
    (key: string) => (e: React.FormEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [key]: e.currentTarget.value,
      })
    }

  const handleSubmit = async () => {
    const [err, data] = await request<CreateMiembro>(CREATE_MIEMBRO, {
      idUser: Auth?.auth?.id,
      input: { ...values },
    })
    if (data?.errors) {
      setError(data?.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.createMiembro) {
      navigate('/get-miembros')
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
            Crear miembro de familia
          </Typography>
          <Form>
            <Input
              text='Cedula del jefe de familia'
              value={values.ciJefeFamily}
              onChange={handleChange('ciJefeFamily')}
              size='md'
              placeholder='cedula del jefe de familia'
            />
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
              text='Cedula de idéntidad'
              value={values.ci}
              onChange={handleChange('ci')}
              size='md'
              placeholder='cedula de idéntidad'
            />
            <Input
              text='Fecha de nacimiénto'
              value={values.dateNacimiento}
              onChange={handleChange('dateNacimiento')}
              size='md'
              placeholder='fecha de nacimiénto'
            />
            <Input
              text='Edad'
              value={values.age}
              onChange={handleChange('age')}
              size='md'
              placeholder='edad'
            />
            <Input
              text='Telefono o Email'
              value={values.phone}
              onChange={handleChange('phone')}
              size='md'
              placeholder='telefono o email'
            />
            <Input
              text='Discapacidad o Enfermedad'
              value={values.discapacity}
              onChange={handleChange('discapacity')}
              size='md'
              placeholder='discapacidad o enfermedad'
            />
            <Input
              text='Sexo'
              value={values.sexo}
              onChange={handleChange('sexo')}
              size='md'
              placeholder='sexo'
            />
            <Button
              onClick={handleSubmit}
              color='primary'
              style={{ marginTop: '20px' }}
              size='lg'
            >
              Crear miembro
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
