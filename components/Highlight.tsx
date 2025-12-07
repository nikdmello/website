interface HighlightProps {
  children: React.ReactNode
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <span className="font-medium text-white">
      {children}
    </span>
  )
}