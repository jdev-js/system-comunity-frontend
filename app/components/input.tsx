import './component.css'
import Typography from './typography'

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: string
  placeholder?: string
  name?: string
  size?: 'sm' | 'lg' | 'md' | 'full'
  value?: string
  text?: string
}

export default function Input({
  className,
  size = 'lg',
  value = '',
  text = '',
  ...props
}: InputProps) {
  return (
    <div className={`container-input container-input-size-${size}`}>
      <Typography style={{ marginLeft: '5px', fontSize: '14px' }} color='dark'>
        {text}
      </Typography>
      <input
        value={value}
        style={{ width: '90%' }}
        className={`input ${className}`}
        {...props}
      />
    </div>
  )
}
