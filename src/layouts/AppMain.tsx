import roleList from '../constants'
import RoleItem from '../components/RoleItem'
import OneLineBlock from '../components/OneLineBlock'
import Skills from '../components/Skills'

export default function AppMain() {
  return (
    <div className="main">
      {roleList.map((role, index) => (
        <RoleItem key={index} role={role} />
      ))}

      <div className="employmentHistory">
        <OneLineBlock title="Skills" />
        <Skills skills={`
        Specializes in TypeScript(React, React Native, Next, Vue, Pinia), JavaScript(Vue, Nuxt, VueX), Kotlin(Jetpack Compose, Hilt), Flutter(GetX),\n
        Java(SpringBoot, Android), SCSS, Jenkins, GitHub Actions, Linux, Docker, Python, Git, WebRTC, NodeJS(ExpressJS), MongoDB, GraphQL`} />
        <Skills skills="Strong understanding of SAAS platforms, RESTful APIs, and cloud infrastructure" />
      </div>

      <div className="employmentHistory">
        <OneLineBlock title="Languages" />
        <Skills skills="English(Fluent), Cantonese(Native), Mandarin(Fluent)" />
      </div>
    </div>
  )
}
