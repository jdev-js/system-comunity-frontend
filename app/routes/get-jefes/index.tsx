import Container from '~/components/container'
import ListItemJefe from '~/components/list-item-jefe'
import NavAdmin from '~/components/nav-admin'

export default function GetJefesPage() {
  const data = [
    {
      firstname: 'jesus',
      lastname: 'alcala',
      ci: '32229775',
    },
    {
      firstname: 'julio',
      lastname: 'alcala',
      ci: '32229775',
    },
  ]

  return (
    <Container>
      <NavAdmin />
      <ListItemJefe data={data} />
    </Container>
  )
}
