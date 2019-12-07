import './component.css'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  size: 'sm' | 'lg' | 'md' | 'micro' | 'icon'
  color: 'primary' | 'secondary' | 'error'
  children: React.ReactNode | React.ReactNode[]
}

export default function Button({
  children,
  size,
  color,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bg-${color} size-${size} button ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
