import Container from '~/components/container'
import Typography from '~/components/typography'
import CardInfo from '~/components/card-info'
import './index.css'
import NavAdmin from '~/components/nav-admin'

export default function AdminPage() {
  return (
    <Container>
      <NavAdmin />
      <section className='section-container'>
        <div className='info-user'>
          <Typography variant='3xl' as='h1'>
            <strong>Bienvenido</strong> Jesus Alcala
          </Typography>
          <Typography as='p' variant='sm'>
            10:30pm
          </Typography>
        </div>
        <section className='info-system'>
          <Typography as='h2' variant='lg'>
            Ultima informacion
          </Typography>
          <div className='container-card-info'>
            <CardInfo
              numberPerson={120}
              title='Miembros de familia'
              description='cada miembro de familia pertenece a un jefe de familia'
            />
            <CardInfo
              numberPerson={50}
              title='Jefe de Familia'
              description='jefe de familia es la persona quien encabeza a la familia'
            />
            <CardInfo
              numberPerson={50}
              title='Jefe de Comunidad'
              description='jefe de comunidad es la persona al mando de la comunidad'
            />
            <CardInfo
              numberPerson={50}
              title='Lider de Calle'
              description='Lider de calle es la persona encargada de gestionar cualquier inconveniente en la comunidad'
            />
          </div>
        </section>
      </section>
      <footer></footer>
    </Container>
  )
}
