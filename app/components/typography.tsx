import './component.css'

interface TypographyProps
  extends React.HTMLAttributes<
    HTMLAnchorElement | HTMLHeadingElement | HTMLParagraphElement
  > {
  as?: 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  variant?: 'md' | 'lg' | 'sm' | 'mx' | 'xl' | '2xl' | '3xl' | 'boby' | '4xl'
  color?: 'dark' | 'light'
}

export default function Typography({
  as = 'h1',
  variant = '2xl',
  className = '',
  color = 'light',
  children,
  ...props
}: TypographyProps) {
  const Component = as
  return (
    <Component
      className={`text-${variant} text-${color} ${className} typography`}
      {...props}
    >
      {children}
    </Component>
  )
}
