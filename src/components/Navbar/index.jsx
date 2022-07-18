import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLinksHome, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'

const Navbar = ({ toggle }) => (
  <>
    <Nav>
      <NavbarContainer>
        <NavLinksHome to="top">farming-jules</NavLinksHome>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Projects

            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contact-me"
              smooth
              duration={500}
              spy
              exact="true"
              offset={-80}
            >
              Contact Me

            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  </>
)

export default Navbar
