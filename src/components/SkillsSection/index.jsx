import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { SkillsContainer, SkillsH1, SkillsWrapper, SkillsCard, SkillsIcon, SkillsH2, SkillsP, SkillsCardInner, SkillsCardBack, SkillsCardFront } from './SkillsElements'

const SkillsSection = () => (
  <>
    <SkillsContainer id="skills">
      <SkillsH1>Features of Regenerative Farming</SkillsH1>
      <SkillsWrapper>

        <SkillsCard>
          <SkillsCardInner>
            <SkillsCardFront>
              <SkillsIcon src={`${process.env.PUBLIC_FOLDER}/images/svg-1.svg`} />
              <SkillsH2>No Till</SkillsH2>
              <SkillsP>Hover and see more</SkillsP>
            </SkillsCardFront>
            <SkillsCardBack className="d-flex flex-column justify-content-center">
              <div>Biological Solutions</div>
              <ProgressBar variant="info" now={90} />
              <div>Work with Nature</div>
              <ProgressBar variant="info" now={60} />
            </SkillsCardBack>
          </SkillsCardInner>
        </SkillsCard>

        <SkillsCard>
          <SkillsCardInner>
            <SkillsCardFront>
              <SkillsIcon src={`${process.env.PUBLIC_FOLDER}/images/svg-2.svg`} />
              <SkillsH2>Composting</SkillsH2>
              <SkillsP>Hover and see more</SkillsP>
            </SkillsCardFront>
            <SkillsCardBack className="d-flex flex-column justify-content-center">
              <div>Waste Reduction</div>
              <ProgressBar variant="info" now={80} />
              <div>Green House Gas Reduction</div>
              <ProgressBar variant="info" now={70} />
              <div>Better Air and Water</div>
              <ProgressBar variant="info" now={75} />
              <div>Upcycling resources</div>
              <ProgressBar variant="info" now={70} />
              <div>Ecologically Sound</div>
              <ProgressBar variant="info" now={80} />
            </SkillsCardBack>
          </SkillsCardInner>
        </SkillsCard>

        <SkillsCard>
          <SkillsCardInner>
            <SkillsCardFront>
              <SkillsIcon src={`${process.env.PUBLIC_FOLDER}/images/svg-3.svg`} />
              <SkillsH2>Social Impact</SkillsH2>
              <SkillsP>Hover and see more</SkillsP>
            </SkillsCardFront>
            <SkillsCardBack className="d-flex flex-column justify-content-center">
              <div>Carbon Mileage</div>
              <ProgressBar variant="info" now={65} />
              <div>Higher Food Quality</div>
              <ProgressBar variant="info" now={65} />
              <div>Medical Costs Reduction</div>
              <ProgressBar variant="info" now={80} />
              <div>Reliability</div>
              <ProgressBar variant="info" now={70} />
              <div>Lower Social Costs</div>
              <ProgressBar variant="info" now={80} />
            </SkillsCardBack>
          </SkillsCardInner>
        </SkillsCard>

      </SkillsWrapper>
    </SkillsContainer>
  </>
)

export default SkillsSection
