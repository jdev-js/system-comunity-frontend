import { CSSProperties } from 'react'
import './component.css'

interface ContainerProps {
  as?:
    | 'main'
    | 'aside'
    | 'footer'
    | 'div'
    | 'article'
    | 'span'
    | 'header'
    | 'section'
    | 'nav'
  children: React.ReactNode | React.ReactNode[]
  style?: CSSProperties
}

export default function Container({
  as = 'main',
  children,
  style,
}: ContainerProps) {
  const Component = as
  return (
    <Component style={style} className='container'>
      {children}
    </Component>
  )
}
