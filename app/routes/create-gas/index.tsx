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
import { CreateGas, GAS_REGISTER } from '~/services/gas'
import type { MetaFunction } from '@remix-run/node'
import useAuth from '~/hooks/useAuth'

export const meta: MetaFunction = () => {
  return [
    { title: 'Registra nuevo senso de gas' },
    {
      name: 'description',
      content:
        'Registrar nuevo senso de gas para un control de distribución efectivo',
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
    const [err, data] = await request<CreateGas>(GAS_REGISTER, {
      idUser: Auth?.auth?.id,
      input: { ...values },
    })
    if (data?.errors) {
      setError(data?.errors[0].message)
    }
    if (err) {
      setError(err.message)
    }
    if (data?.data.createGas) {
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
            Crear registro de gas
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
              Crear gas
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
