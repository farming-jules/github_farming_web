import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { ProjectsContainer, ImageContainer, ProjectsH1 } from './ProjectsSectionElements'

const carouselItems = [
  {
    // src= {`${process.env.PUBLIC_FOLDER}/images/1_Poor_soil.JPG`} alt={alt},
    image: `${process.env.PUBLIC_FOLDER}/images/1_Poor_soil.JPG`,
    title: 'Initial Stage',
    description: 'Soil condition that is poor in breathability and water absorption.'
  }, {
    image: `${process.env.PUBLIC_FOLDER}/images/2_Recovering_soil.JPG`,
    title: 'Recovering Stage',
    description: 'Recovering in soil health with mulching. It takes time to heal.'
  }, {
    image: `${process.env.PUBLIC_FOLDER}/images/3_Covered_Soil.JPG`,
    title: 'Improvement Stage',
    description: 'Better soil health with compost, compost tea, and cover crops. Higher microbial level in soil.'
  }, {
    image: `${process.env.PUBLIC_FOLDER}/images/4_Better_Crops.JPG`,
    title: 'Results',
    description: 'Soil-food-web is built, resulting in stronger soil defense against bugs and soil-borne diseases without any use of pesticides or other chemical nasties.'
  }, {
    image: `${process.env.PUBLIC_FOLDER}/images/5_Compost.JPG`,
    title: 'Thermal, Aerobic Compost in the making',
    description: 'My compost standard follows strictly to Elaine Ingham principle. 100% regenerative that helps soil draw CO2 from the atmosphere.'
  }, {
    image: `${process.env.PUBLIC_FOLDER}/images/6_MaturingCompost.JPG`,
    title: 'Compost coming to mature',
    description: 'Biomass shrinks. The microbes love their new home and produce a lot of heat that can reach >70C.'
  }, {
    image: `${process.env.PUBLIC_FOLDER}/images/7_MaturedCompost.JPG`,
    title: 'Ready to rock!',
    description: 'Temperature stablised, making it a warm and moist home that is so rich in carbon, humus, and minerals. It is truly the beginning of human civilisation!'
  }

]

const ProjectsSection = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Agricultural Projects</ProjectsH1>
      <div className="container">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {
            carouselItems && carouselItems.map((item, idx) => (
              <Carousel.Item>
                <ImageContainer>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      className="d-block w-100  "
                      src={item.image}
                      alt={`${idx}-slide`}
                    />
                  </a>
                </ImageContainer>
                <Carousel.Caption id="carousel-caption">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    </ProjectsContainer>
  )
}

export default ProjectsSection
