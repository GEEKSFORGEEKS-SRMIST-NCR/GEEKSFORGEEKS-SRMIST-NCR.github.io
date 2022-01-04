import * as React from "react"
import Contact from "../components/Contacts/Contact"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Team from "../components/Team/Team"
import './style.css'

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Team />
      <Contact />
    </>
  )
}

export default IndexPage
