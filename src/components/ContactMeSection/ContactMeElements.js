import styled from 'styled-components'

export const ContactMeContainer = styled.div`
  height: 840px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1100px) {
    height: 800px;
  }
  @media screen and (max-width: 750px) {
    height: 1250px;
  }
`

export const ContactMeH1 = styled.div`
  font-size:2.5rem;
  color: #fff;
  padding-top:50px;
  padding-bottom: 20px;
  @media screen and (max-width:480px){
    font-size: 2rem;
    padding-top: 0;
  }
`
export const ContactMeWrapper = styled.div`
  max-width:100vw;
  margin: 0 auto;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1050px) {
  grid-template-columns: 1fr;
  }
`
