import { HandDrawnUnderline } from './HandDrawn'

interface HighlightProps {
  children: React.ReactNode
  handDrawn?: boolean
}

export default function Highlight({ children, handDrawn = false }: HighlightProps) {
  return (
    <span className="font-medium text-white">
      {children}
    </span>
  )
}