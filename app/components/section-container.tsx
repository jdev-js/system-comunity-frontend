import './component.css'

interface SectionContainerProps {
  children?: React.ReactNode | React.ReactNode[]
  align?: 'start' | 'center' | 'end'
}

export default function SectionContainer({
  children,
  align = 'center',
}: SectionContainerProps) {
  return (
    <section className={`section-container align-${align}`}>{children}</section>
  )
}
