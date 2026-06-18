export const summary = `
  Senior Mobile Application Developer and Payment Systems Specialist with 5+ years of experience
  building Android applications for unattended payment infrastructure, specializing in Kotlin (Jetpack Compose),
  cross-platform mobile development, and cloud-connected IoT systems. Proven track record delivering
  large-scale solutions across 10,000+ terminals in self-service payment environments.
  Strong team leader focused on software architecture, CI/CD automation, and operational efficiency.
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
    title: "Team Lead - Mobile Application Development",
    company: "WeVend",
    website: "https://www.wevend.com/",
    startDate: "Feb 2026",
    endDate: "Current",
    skills: "Kotlin(Jetpack Compose), SQLite(Room Database), Java, JUnit, JavaScript(React Native, Electron, React), TypeScript(React Native, Electron, React)",
    description: [
      "Developed and delivered 8+ Android applications for unattended payment systems across multiple self-service verticals, supporting up to 50,000 daily transactions across 10,000+ deployed terminals",
      "Owned the architecture of a modular Android ecosystem following MVVM principles, using AIDL and Intents for cross-app communication, enabling shared SDKs and feature reuse across 6+ applications — reducing new project setup time by 40% and improving terminal performance",
      "Developed a PCI-compliant mobile payment SDK to securely handle cardholder data",
      "Led product roadmap planning and infrastructure design, establishing structured workflows for POC, production development, and technical requirement reviews — and automated CI/CD pipelines via GitHub Actions, reducing release turnaround time by 30%",
      "Spearheaded AI-assisted development workflows using Claude Code, enforcing data governance protocols for AI tooling compliance and increasing team development speed by 70%",
      "Integrated hardware peripherals across multiple protocols including TCP for kiosk communication, MDB, Coin Pulse, and Serial Connection, enabling real-time interactions across the terminal ecosystem",
      "Engineered application-layer logging for unattended terminals where manufacturer diagnostics were unavailable, enabling remote debugging via cloud IoT services and reducing diagnostic time by 25%",
      "Established unit testing practices with JUnit across Android applications, improving code reliability and reducing regression risk during iterative releases",
    ],
    previousRole: [
      {
        title: "Mobile Application Developer",
        company: "WeVend",
        startDate: "Sep 2024",
        endDate: "Feb 2026",
      }
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
      "Built an internal portal with RESTful API and digital workflows to streamline promotion campaign execution, reducing maintenance time by 20%",
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
      "Developed two cross-platform mobile applications for iOS and Android using React Native and Flutter, featuring live chat, push notifications, and QR code scanning",
      "Deployed release activities for over 5 projects and published 2+ mobile applications to Google Play and App Store",
      "Migrated the development process from Scrum to Agile, resulting in a 20% increase in Sprint completion rate",
      "Conducted code reviews for 5 team members and created detailed documentation, enhancing maintainability and reducing development time by 20%",
      "Collaborated with product managers, designers, and backend developers on RESTful API designs and feature delivery, increasing customer satisfaction by 15%",
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
