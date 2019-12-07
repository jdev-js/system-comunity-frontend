import Container from '~/components/container'
import Typography from '~/components/typography'
import CardInfo from '~/components/card-info'
import './index.css'
import NavAdmin from '~/components/nav-admin'
import useAuth from '~/hooks/useAuth'
import type { MetaFunction } from '@remix-run/node'
import SectionContainer from '~/components/section-container'

export const meta: MetaFunction = () => {
  return [
    { title: 'Gestionador de datos de la Comunidad' },
    {
      name: 'description',
      content: 'Gestionador de datos de la comunidad eficiente y rapido',
    },
  ]
}

export default function AdminPage() {
  const Auth = useAuth()
  const date = new Date()
  return (
    <Container>
      <NavAdmin />
      <SectionContainer align='center'>
        <div className='info-user'>
          <Typography variant='3xl' as='h1'>
            <strong>Bienvenido</strong> {Auth?.auth?.firstname}{' '}
            {Auth?.auth?.lastname}
          </Typography>
          <Typography as='p' variant='sm'>
            {date.getHours().toString()}:{date.getMinutes().toString()}
          </Typography>
        </div>
        <section className='info-system'>
          <Typography as='h2' variant='lg'>
            Ultima informacion
          </Typography>
          <div className='container-card-info'>
            <CardInfo
              title='Miembros de familia'
              description='cada miembro de familia pertenece a un jefe de familia'
            />
            <CardInfo
              title='Jefe de Familia'
              description='jefe de familia es la persona quien encabeza a la familia'
            />
            <CardInfo
              title='Jefe de Comunidad'
              description='jefe de comunidad es la persona al mando de la comunidad'
            />
            <CardInfo
              title='Lider de Calle'
              description='Lider de calle es la persona encargada de gestionar cualquier inconveniente en la comunidad'
            />
          </div>
        </section>
      </SectionContainer>
    </Container>
  )
}
