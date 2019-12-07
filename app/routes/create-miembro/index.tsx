import Container from '~/components/container'
import Input from '~/components/input'
import NavAdmin from '~/components/nav-admin'
import SectionContainer from '~/components/section-container'
import Typography from '~/components/typography'
import Button from '~/components/button'
import Form from '~/components/form'
import { useState } from 'react'
import { request } from '~/services/request'
import { CREATE_MIEMBRO } from '~/services/miembro'

const initialvalues = {
  ciJefe: '',
  firstname: '',
  lastname: '',
  ci: '',
  dateNacimiento: '',
  age: '',
}

export default function CreateMiembro() {
  const [values, setValues] = useState(initialvalues)

  const handleChange =
    (key: string) => (e: React.FormEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [key]: e.currentTarget.value,
      })
    }

  const handleSubmit = async () => {
    const [err, data] = await request(CREATE_MIEMBRO, { input: { ...values } })
    if (err) {
      console.error(err)
    }
    console.log(data)
  }

  return (
    <Container>
      <NavAdmin />
      <Container>
        <SectionContainer align='start'>
          <Typography color='dark' style={{ marginTop: '20px' }} variant='3xl'>
            Crear miembro de familia
          </Typography>
          <Form>
            <Input
              onChange={handleChange('ciJeje')}
              size='md'
              placeholder='cedula del jefe de familia'
            />
            <Input
              onChange={handleChange('firstname')}
              size='md'
              placeholder='nombre completo'
            />
            <Input
              onChange={handleChange('lastname')}
              size='md'
              placeholder='apellido completo'
            />
            <Input
              onChange={handleChange('ci')}
              size='md'
              placeholder='cedula de identidad'
            />
            <Input
              onChange={handleChange('dateNacimiento')}
              size='md'
              placeholder='fecha de nacimiento'
            />
            <Input
              onChange={handleChange('age')}
              size='md'
              placeholder='edad'
            />
          </Form>
          <Button
            onClick={handleSubmit}
            style={{ marginTop: '20px' }}
            color='primary'
            size='lg'
          >
            Crear miembro
          </Button>
        </SectionContainer>
      </Container>
    </Container>
  )
}
