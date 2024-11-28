import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import GlobalContext from './context/GlobalContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <AppHeader />
      <AppMain />
    </>
  )
}

export default App
