import React, { createContext, useState, useContext } from "react";
import './App.css'
import AppHeader from './components/AppHeader'
import SearchBar from './components/SearchBar'
import Button from './components/Button'
import AppMain from './components/AppMain'
import { GlobalContextProvider, useGlobalContext } from './context/GlobalContext'

function App() {


  return (
    <>

      <GlobalContextProvider >





        <AppHeader />
        <SearchBar />
        <Button />
        <AppMain />



      </GlobalContextProvider>

    </>
  )
}

export default App
