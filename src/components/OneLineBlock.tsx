interface OneLineBlockProps {
  title: string
}

export default function OneLineBlock({ title }: OneLineBlockProps) {
  return (
    <div className="oneLineBlock">
      <div className="title">{title}</div>
    </div>
  )
}
