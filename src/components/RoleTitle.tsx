interface RoleTitleProps {
  title: string
  company?: string
  link?: string
  startDate: string
  endDate: string
}

export default function RoleTitle({ title, company, link, startDate, endDate }: RoleTitleProps) {
  return (
    <div className="jobTitle">
      <span className="title">{title}</span>
      {company && <span>．</span>}
      {company && (
        <span className="company">
          <a href={link}>{company}</a>
        </span>
      )}
      <span className="date"> {startDate} - {endDate}</span>
    </div>
  )
}
