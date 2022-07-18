import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { SkillsContainer, SkillsH1, SkillsWrapper, SkillsCard, SkillsIcon, SkillsH2, SkillsP, SkillsCardInner, SkillsCardBack, SkillsCardFront } from './SkillsElements'

const SkillsSection = () => (
  <>
    <SkillsContainer id="skills">
      <SkillsH1>Conventional vs Regenerative Farming</SkillsH1>
      <SkillsWrapper>

        <SkillsCard>
          <SkillsCardInner>
            <SkillsCardFront>
              <SkillsIcon src={`${process.env.PUBLIC_FOLDER}/images/svg-1.svg`} />
              <SkillsH2>Video Editing</SkillsH2>
              <SkillsP>Hover and see more</SkillsP>
            </SkillsCardFront>
            <SkillsCardBack className="d-flex flex-column justify-content-center">
              <div>OBS</div>
              <ProgressBar variant="info" now={90} />
              <div>Davinici Resolve</div>
              <ProgressBar variant="info" now={60} />
            </SkillsCardBack>
          </SkillsCardInner>
        </SkillsCard>

        <SkillsCard>
          <SkillsCardInner>
            <SkillsCardFront>
              <SkillsIcon src={`${process.env.PUBLIC_FOLDER}/images/svg-2.svg`} />
              <SkillsH2>Front-end Development</SkillsH2>
              <SkillsP>Hover and see more</SkillsP>
            </SkillsCardFront>
            <SkillsCardBack className="d-flex flex-column justify-content-center">
              <div>HTML</div>
              <ProgressBar variant="info" now={80} />
              <div>CSS</div>
              <ProgressBar variant="info" now={70} />
              <div>React</div>
              <ProgressBar variant="info" now={75} />
              <div>React Native</div>
              <ProgressBar variant="info" now={70} />
              <div>Next-Js(Pages)</div>
              <ProgressBar variant="info" now={80} />
            </SkillsCardBack>
          </SkillsCardInner>
        </SkillsCard>

        <SkillsCard>
          <SkillsCardInner>
            <SkillsCardFront>
              <SkillsIcon src={`${process.env.PUBLIC_FOLDER}/images/svg-3.svg`} />
              <SkillsH2>Back-end Development</SkillsH2>
              <SkillsP>Hover and see more</SkillsP>
            </SkillsCardFront>
            <SkillsCardBack className="d-flex flex-column justify-content-center">
              <div>Node-Js</div>
              <ProgressBar variant="info" now={65} />
              <div>Express-Js</div>
              <ProgressBar variant="info" now={65} />
              <div>Next-Js(API)</div>
              <ProgressBar variant="info" now={80} />
              <div>PostgreSQL</div>
              <ProgressBar variant="info" now={70} />
              <div>Firebase</div>
              <ProgressBar variant="info" now={80} />
            </SkillsCardBack>
          </SkillsCardInner>
        </SkillsCard>

      </SkillsWrapper>
    </SkillsContainer>
  </>
)

export default SkillsSection
