import React, { createContext, useState, useContext } from "react";
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import GlobalContext from './context/GlobalContext'
import SearchBar from './components/SearchBar'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <GlobalContext.Provider value={{ count, setCount }}>





        <AppHeader />
        <AppMain />
        <SearchBar />
        <Button />


      </GlobalContext.Provider>

    </>
  )
}

export default App
