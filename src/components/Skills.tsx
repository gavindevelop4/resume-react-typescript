interface SkillsProps {
  skills?: string
}

export default function Skills({ skills }: SkillsProps) {
  if (!skills) return null
  return (
    <div className="skills">
      {skills}
    </div>
  )
}
