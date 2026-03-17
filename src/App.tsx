import AppHeader from './layouts/AppHeader'
import AppMain from './layouts/AppMain'
import PrintButton from './components/PrintButton'
import './App.css'

export default function App() {
  return (
    <>
      <div className="page">
        <div className="subpage">
          <AppHeader />
          <AppMain />
        </div>
      </div>
      <PrintButton />
    </>
  )
}
