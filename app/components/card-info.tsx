import UserIcon from './icons/user'
import './component.css'

interface CardInfoProps {
  numberPerson?: string | number
  title?: string
  description?: string
}

export default function CardInfo({
  numberPerson,
  title,
  description,
}: CardInfoProps) {
  return (
    <article className='card'>
      <div className='card-info'>
        <strong>+{numberPerson?.toString()}</strong>
        <UserIcon width='35' height='35' />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
}
