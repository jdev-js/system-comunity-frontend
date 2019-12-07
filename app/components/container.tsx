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
}

export default function Container({ as = 'main', children }: ContainerProps) {
  const Component = as
  return <Component className='container'>{children}</Component>
}
