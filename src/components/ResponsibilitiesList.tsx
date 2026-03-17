interface ResponsibilitiesListProps {
  list?: string[]
}

export default function ResponsibilitiesList({ list }: ResponsibilitiesListProps) {
  if (!list || list.length === 0) return null
  return (
    <div className="responsibilitesList">
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
