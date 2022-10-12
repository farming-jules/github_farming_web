import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import MainSection from '../MainSection'
import AboutSection from '../AboutSection'
import SkillsSection from '../SkillsSection'
import ProjectsSection from '../ProjectsSection'
import ContactMeSection from '../ContactMeSection'
import homeObjOne from '../AboutSection/Data'

const Home = () => {
  const [isOpened, setIsOpened] = useState(false)

  const toggle = () => {
    setIsOpened(!isOpened)
  }

  return (
    <>
      <Sidebar isOpened={isOpened} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
      <AboutSection {...homeObjOne} />
      <SkillsSection />
      <ProjectsSection />
      <ContactMeSection />
    </>
  )
}

export default Home
