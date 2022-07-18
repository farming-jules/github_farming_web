import React, { useState } from 'react'
// import Video from 'videos/video.mp4'
import { MainContainer, VideoBg, MainBg, MainContent, MainH1, MainP, MainBtnWrapper, ArrowForward, ArrowRight } from './MainElements'
import { Button } from '../ButtonElement'

const MainSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <MainContainer id="top">
      <MainBg>
        <VideoBg autoPlay loop muted src={`${process.env.PUBLIC_FOLDER}/videos/Compost.MOV`} type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainH1>HI , I&apos;M JULIAN</MainH1>
        <MainP>
          Passionate in WebApp design & development. I love agriculture.
        </MainP>
        <MainBtnWrapper>
          <Button
            to="contact-me"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth
            duration={500}
            spy
            exact="true"
            offset={-80}
          >
            Contact Me
            {' '}
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  )
}

export default MainSection
