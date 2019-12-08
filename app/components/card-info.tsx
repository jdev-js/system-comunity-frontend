import UserIcon from './icons/user'
import './component.css'

interface CardInfoProps {
  title?: string
  description?: string
}

export default function CardInfo({ title, description }: CardInfoProps) {
  return (
    <article className='card'>
      <div className='card-info'>
        <UserIcon width='35' height='35' />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
}
