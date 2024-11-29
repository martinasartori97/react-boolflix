import React, { createContext, useState, useContext } from "react";
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import { GlobalContextProvider, useGlobalContext } from './context/GlobalContext'
import SearchBar from './components/SearchBar'
import Button from './components/Button'

function App() {


  return (
    <>

      <GlobalContextProvider >





        <AppHeader />
        <AppMain />
        <SearchBar />
        <Button />



      </GlobalContextProvider>

    </>
  )
}

export default App
