import { CSSProperties } from 'react'
import './component.css'

interface SectionContainerProps {
  children?: React.ReactNode | React.ReactNode[]
  align?: 'start' | 'center' | 'end'
  style?: CSSProperties
}

export default function SectionContainer({
  children,
  align = 'center',
  style,
}: SectionContainerProps) {
  return (
    <section style={style} className={`section-container align-${align}`}>{children}</section>
  )
}
