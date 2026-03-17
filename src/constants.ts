export const summary = `
  Experienced software developer with a strong focus on web
  and mobile application development, specializing in SaaS platforms, RESTful APIs,
  and cloud infrastructure. Proven track record in delivering successful software
  implementations across web and Android platforms, including large-scale solutions designed for deployment to
  10,000+ devices. Strong collaborator and team leader,
  focused on optimizing development processes and enhancing operational efficiency.
  Seeking meaningful opportunities to contribute to innovative and impactful projects at forward-thinking organizations.
`

export interface PreviousRole {
  title: string
  company?: string
  startDate: string
  endDate: string
}

export interface Project {
  name: string
  url: string
}

export interface Role {
  title: string
  company: string
  website: string
  startDate: string
  endDate: string
  skills?: string
  description?: string[]
  previousRole?: PreviousRole[]
  projects?: Project[]
}

const roleList: Role[] = [
  {
    title: "Mobile Application Developer",
    company: "WeVend",
    website: "https://www.wevend.com/",
    startDate: "Sep 2024",
    endDate: "Current",
    skills: "Kotlin(Jetpack Compose), SQLite(Room Database), Java, JavaScript(React Native, Electron, React), TypeScript(React Native, Electron, React)",
    description: [
      "Developed and delivered 6+ Android applications for unattended payment systems across car washes, air pumps, and vacuum stations, supporting secure self-service transactions on 10,000+ terminals scheduled for deployment",
      "Built multiple modular Android SDKs to standardize features and enable inter-app communication via Intents, reducing project setup time by 40% and accelerating feature integration across apps",
      "Integrated manufacturer SDKs over hardware protocols such as Coin Pulse and Serial Connection, enabling seamless interaction with a wide range of embedded devices",
      "Created a Windows desktop application (.exe using Electron) to interface with Android devices over USB Serial, reducing manual setup time for field technicians by over 50%",
      "Implemented native TCP server on Android terminals for real-time communication with kiosks—an industry-first in the unattended sector that improved integration and reduced diagnostic time by 25%",
      "Architected a scalable infrastructure for remote device control and real-time telemetry, powered by cloud-based IoT services, enhancing visibility and reliability across all terminals",
      "Automated CI/CD pipelines using GitHub Actions to handle APK builds, code quality checks, and deployments, reducing release turnaround time by 30%"
    ]
  },
  {
    title: "POS System Analyst",
    company: "Sarku Japan",
    website: "https://www.sarkujapan.com/",
    startDate: "Aug 2023",
    endDate: "Sep 2024",
    skills: "TypeScript(React, Redux), JavaScript(React, Redux), Java(Spring Boot), Python, MSSQL",
    description: [
      "Created an internal portal and digital workflow to enhance operational flexibility and improve turnaround rates for executing promotion campaigns",
      "Developed a RESTful API for the portal, reducing maintenance time by 20%",
    ]
  },
  {
    title: "Senior Frontend Developer (Team Lead)",
    company: "Everway Technology Limited",
    website: "https://universeaction.com/",
    startDate: "Jun 2022",
    endDate: "Feb 2023",
    skills: "TypeScript(React, React Native, Vue, Pinia), JavaScript(Vue, Nuxt, VueX), Flutter(GetX),\nSCSS, Jenkins, Git, SocketIO, WebRTC, Figma",
    description: [
      "Migrated the development process from Scrum to Agile, resulting in a 20% increase in Sprint completion rate",
      "Conducted code reviews for 5 team members and created detailed documentation, enhancing maintainability and reducing development time by 20%",
      "Deployed release activities for over 5 projects and published 2+ mobile applications to Google Play and App Store",
      "Collaborated with product managers, UI/UX designers, and backend developers to implement and improve features, increasing customer satisfaction by 15% and transforming the application into a SaaS platform to attract more customers",
      "Worked with backend developers on RESTful API designs to improve performance",
      "Developed a crypto exchange application for iOS and Android with live chat, notifications, QR code scanner features",
    ],
    previousRole: [
      {
        title: "Frontend Developer",
        company: "Everway Technology Limited",
        startDate: "May 2021",
        endDate: "May 2022",
      }
    ],
    projects: [
      {
        name: "E-Coins (Crypto Exchange Application)",
        url: "apps.apple.com/us/app/e-coins-by-unal/id1577119952",
      },
      {
        name: "AboSend (SMS Platform Web Application)",
        url: "www.abosend.com",
      },
      {
        name: "AboTalk (Smart Voice System Web Application)",
        url: "www.abotalk.com",
      },
      {
        name: "E-PowerSpot (Static Page with great SEO)",
        url: "www.epowerspot.com"
      }
    ]
  },
  {
    title: "Web Developer",
    company: "OSW Group Limited",
    website: "https://www.osw.com.hk/",
    startDate: "Aug 2020",
    endDate: "Apr 2021",
    skills: "PHP, JavaScript(jQuery), SCSS, AWS EC2, Git, Photoshop, Illustrator",
    description: [],
    projects: [
      {
        name: "Mount Anderson",
        url: "mountanderson.com.hk"
      },
      {
        name: "10 LaSalle",
        url: "10lasalle.com.hk",
      }
    ]
  },
]

export default roleList
