import type { Role } from '../constants'
import RoleTitle from './RoleTitle'
import Skills from './Skills'
import ResponsibilitiesList from './ResponsibilitiesList'

interface RoleItemProps {
  role: Role
}

export default function RoleItem({ role }: RoleItemProps) {
  return (
    <div className="role-item">
      <RoleTitle
        title={role.title}
        company={role.company}
        link={role.website}
        startDate={role.startDate}
        endDate={role.endDate}
      />
      {role.previousRole?.map((prev, index) => (
        <RoleTitle
          key={index}
          title={prev.title}
          company={prev.company}
          startDate={prev.startDate}
          endDate={prev.endDate}
        />
      ))}
      <Skills skills={role.skills} />
      <ResponsibilitiesList list={role.description} />
    </div>
  )
}
