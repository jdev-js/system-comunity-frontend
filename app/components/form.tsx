import './component.css'

export default function Form({ children }: {children: React.ReactNode[] | React.ReactNode}) {
  return <main className='form-container'>{children}</main>
}
