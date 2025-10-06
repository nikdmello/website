interface HighlightProps {
  children: React.ReactNode
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <span className="font-medium text-cyber-blue">
      {children}
    </span>
  )
}