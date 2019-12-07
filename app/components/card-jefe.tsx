import Button from './button'
import './component.css'

export default function CardJefe({
  data,
}: {
  data: { firstname: string; lastname: string; ci: string }
}) {
  return (
    <article className='card-jefe'>
      <div className='card-container-info'>
        <h4>
          {data.firstname} {data.lastname}
        </h4>
        <p>{data.ci}</p>
      </div>
      <div className='card-container-button'>
        <Button color='primary' size='micro'>
          Edit
        </Button>
        <Button color='error' size='micro'>
          Delete
        </Button>
      </div>
    </article>
  )
}
