import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarMain from './components/navbar/NavbarMain'
import { HeroMain } from './components/heroSection/HeroMain'
import { HeroGredient } from './components/heroSection/HeroGredient'
import { MySkills } from './MySkills'
import { AboutMeMain } from './components/aboutMe/AboutMeMain'
import { HelperSection } from './components/aboutMe/HelperSection'
import { SkillsMain } from './components/skillsSection/SkillsMain'
import { SubSkills } from './components/skillsSection/SubSkills'
import { ExpMain } from './components/Experience/ExpMain'
import { ProjectMain } from './components/ProjetsSection/ProjectMain'
import { ConMain } from './components/ContactMe/ConMain'
import { FooterMain } from './components/Footer/FooterMain'

   

function App() {

  return (
    <main className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGredient />
      <MySkills />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExpMain />
      <ProjectMain />
      <ConMain />
      <FooterMain />

    </main>
  )
}

export default App
