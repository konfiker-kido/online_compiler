import React from 'react'
import EditorPage from './Editor'
import Navbar from './Navbar'
import { LangBar } from './LangBar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <LangBar/>
      <EditorPage />
    </div>
  )
}

export default Home
