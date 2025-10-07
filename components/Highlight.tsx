import { HandDrawnUnderline } from './HandDrawn'

interface HighlightProps {
  children: React.ReactNode
  handDrawn?: boolean
}

export default function Highlight({ children, handDrawn = false }: HighlightProps) {
  if (handDrawn) {
    return (
      <span className="relative inline-block font-medium text-cyber-blue">
        {children}
        <HandDrawnUnderline />
      </span>
    )
  }
  
  return (
    <span className="font-medium text-cyber-blue">
      {children}
    </span>
  )
}