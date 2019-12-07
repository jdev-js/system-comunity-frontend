import Container from '~/components/container'
import Input from '~/components/input'
import NavAdmin from '~/components/nav-admin'
import SectionContainer from '~/components/section-container'
import Typography from '~/components/typography'
import Button from '~/components/button'
import Form from '~/components/form'

export default function CreateJefe() {
  return (
    <Container>
      <NavAdmin />
      <Container>
        <SectionContainer align='start'>
          <Typography color='dark' style={{ marginTop: '20px' }} variant='3xl'>
            Crear jefe de familia
          </Typography>
          <Form>
            <Input size='md' placeholder='nombre completo' name='firtname' />
            <Input size='md' placeholder='apellido completo' name='lastname' />
            <Input size='md' placeholder='numero de telefeno' name='phone' />
            <Input size='md' placeholder='direccion' name='address' />
            <Input size='md' placeholder='cedula de identidad' name='ci' />
            <Input
              size='md'
              placeholder='fecha de nacimiento'
              name='date_nacimiento'
            />
            <Input size='md' placeholder='edad' name='age' />
          </Form>
          <Button style={{ marginTop: '20px' }} color='primary' size='lg'>
            Crear jefe
          </Button>
        </SectionContainer>
      </Container>
    </Container>
  )
}
