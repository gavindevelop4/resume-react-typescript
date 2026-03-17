import type { Project } from '../constants'

interface ProjectHighlightsProps {
  list: Project[]
}

export default function ProjectHighlights({ list }: ProjectHighlightsProps) {
  if (!list || list.length === 0) return null
  return (
    <div className="projectHighlights">
      <div className="title">Project Highlights:</div>
      {list.map((item, index) => (
        <div key={index}>
          <span className="projectName">{item.name}: </span>
          <a className="projectLink" href={`https://${item.url}`}>{item.url}</a>
        </div>
      ))}
    </div>
  )
}
