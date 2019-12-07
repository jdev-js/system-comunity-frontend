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
import { UpdateGas, UPDATE_GAS, GetGas, GET_GAS } from '~/services/gas'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Actualizar el registro de gas' },
    {
      name: 'description',
      content: 'Actulizar los campos de los gas registrados',
    },
  ]
}

const initialvalues = {
  ciJefeFamily: '',
  gasComunal: '',
  gasCoperativa: '',
  numberHome: '',
  sizeLengthGas: '',
  totalCilindros: '',
}

export default function UpdateGasPage() {
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
      const [, data] = await request<GetGas>(GET_GAS, {
        id: searchParams.get('id') ?? '',
      })
      if (data?.data.getGas) {
        const {
          ciJefeFamily,
          gasComunal,
          gasCoperativa,
          numberHome,
          sizeLengthGas,
          totalCilindros,
        } = data.data.getGas
        setValues({
          ciJefeFamily,
          gasComunal,
          gasCoperativa,
          numberHome,
          sizeLengthGas,
          totalCilindros,
        })
      }
    }
    getData()
  }, [])

  const handleSubmit = async () => {
    if (searchParams.get('id') === null) return
    const [err, data] = await request<UpdateGas>(UPDATE_GAS, {
      id: searchParams.get('id') ?? '',
      input: { ...values },
    })
    if (data?.errors) {
      setError(data?.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.updateGas) {
      navigate('/get-gas')
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
            Modificar registro de gas
          </Typography>
          <Form>
            <Input
              value={values.ciJefeFamily}
              onChange={handleChange('ciJefeFamily')}
              size='md'
              placeholder='cedula jefe'
              text='Cedula jefe familia'
            />
            <Input
              value={values.numberHome}
              onChange={handleChange('numberHome')}
              size='md'
              placeholder='numero de la casa'
              text='Nro casa'
            />
            <Input
              value={values.totalCilindros}
              onChange={handleChange('totalCilindros')}
              size='md'
              placeholder='total de cilindros'
              text='Total Cilindros'
            />
            <Input
              value={values.gasComunal}
              onChange={handleChange('gasComunal')}
              size='md'
              placeholder='x - no'
              text='Gas comunal'
            />
            <Input
              value={values.gasCoperativa}
              onChange={handleChange('gasCoperativa')}
              size='md'
              placeholder='x - no'
              text='Gas coperativa'
            />
            <Input
              text='Tamaño del cilindro'
              value={values.sizeLengthGas}
              onChange={handleChange('sizeLengthGas')}
              size='md'
              placeholder='tamaño cilindro'
            />
            <Button
              onClick={handleSubmit}
              style={{ marginTop: '20px' }}
              color='primary'
              size='lg'
            >
              Modificar gas
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
