import Container from '~/components/container'
import Input from '~/components/input'
import NavAdmin from '~/components/nav-admin'
import SectionContainer from '~/components/section-container'
import Typography from '~/components/typography'
import Button from '~/components/button'
import Form from '~/components/form'
import { useEffect, useState } from 'react'
import { request } from '~/services/request'
import { GET_JEFE, GetJefe, UPDATE_JEFE, UpdateJefe } from '~/services/jefe'
import { useNavigate, useSearchParams } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Actualizar jefe de familia' },
    {
      name: 'description',
      content: 'Actualizar los datos de un jefe de familia',
    },
  ]
}

const initialvalues = {
  firstname: '',
  lastname: '',
  phone: '',
  address: '',
  ci: '',
  numberHome: '',
  street: '',
  typeDocument: '',
  sexo: '',
  numberBuy: '',
  discapacity: '',
  dateNacimiento: '',
  age: '',
}
export default function UpdateJefePage() {
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
      const [, data] = await request<GetJefe>(GET_JEFE, {
        id: searchParams.get('id') ?? '',
      })
      if (data?.data.getJefe) {
        const { id, ...input } = data.data.getJefe
        setValues({ ...input })
      }
    }
    getData()
  }, [])

  const handleSubmit = async () => {
    if (searchParams.get('id') === null) return
    const [err, data] = await request<UpdateJefe>(UPDATE_JEFE, {
      id: searchParams.get('id') ?? '',
      input: { ...values },
    })
    if (data?.errors) {
      setError(data?.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.updateJefe) {
      navigate('/get-jefes')
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
            Modificar jefe de familia
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
              text='Numero telefeno'
              value={values.phone}
              onChange={handleChange('phone')}
              size='md'
              placeholder='numero de telefeno'
            />
            <Input
              text='Dirección'
              value={values.address}
              onChange={handleChange('address')}
              size='md'
              placeholder='direccion'
            />
            <Input
              text='Cedula de idéntidad'
              value={values.ci}
              onChange={handleChange('ci')}
              size='md'
              placeholder='cedula de idéntidad'
            />
            <Input
              text='Numero de Calle'
              value={values.street}
              onChange={handleChange('street')}
              size='md'
              placeholder='numero de calle'
            />
            <Input
              text='Tipo de documento'
              value={values.typeDocument}
              onChange={handleChange('typeDocument')}
              size='md'
              placeholder='tipo de documento'
            />
            <Input
              text='Numero de casa'
              value={values.numberHome}
              onChange={handleChange('numberHome')}
              size='md'
              placeholder='tipo de documento'
            />
            <Input
              text='Numero de compras'
              value={values.numberBuy}
              onChange={handleChange('numberBuy')}
              size='md'
              placeholder='numero de compras'
            />
            <Input
              text='Sexo'
              value={values.sexo}
              onChange={handleChange('sexo')}
              size='md'
              placeholder='sexo'
            />
            <Input
              text='Discapicidad o Enfermedad'
              value={values.discapacity}
              onChange={handleChange('discapacity')}
              size='md'
              placeholder='discacidad o enfermedad'
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
            <Button
              style={{ marginTop: '20px' }}
              onClick={handleSubmit}
              color='primary'
              size='lg'
            >
              Modificar jefe
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
