import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Certifications from './components/certifications/certifications'
import Pikachu from './components/pikachu/Pikachu'
const App = () => {
  return (
    
    <>
        <Pikachu/>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Myprojects/>
        <Certifications/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App