import './component.css'

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder?: string
  name?: string
  size?: 'sm' | 'lg' | 'md' | 'full'
  value?: string
}

export default function Input({
  className,
  size = 'lg',
  value = '',
  ...props
}: InputProps) {
  return (
    <input
      value={value}
      className={`input input-size-${size} ${className}`}
      {...props}
    />
  )
}
