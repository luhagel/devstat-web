import React from 'react'
import styled from 'styled-components'

import { Feature, Heading } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  & > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
`

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Why Devstat?</StyledHeading>
    <Grid>
      <StyledFeature
        icon="profile"
        title="Easier Recruitment"
      >
        Get an overview of all your potential recruits by providing some basic info about them. We will do all the hard work of researching and compiling everything.
      </StyledFeature>
      <StyledFeature
        icon="clock"
        title="No More Busywork"
      >
        Stop searching on dozens of sites for your recruiteses activity. DevStat pulls all of that into one, centralized plae. Get back to concentrating on the important things!
      </StyledFeature>
      <StyledFeature
        icon="stats-bars"
        title="Actionable Reports"
      >
        Get an in-depth summary of each developer, for example: How often do they push code? Is their code tested? Which languages and frameworks do they use? Have they written any articles?
      </StyledFeature>
      <StyledFeature
        icon="enter"
        title="Centralized Management"
      >
        Sort and search for your recruitees however you like! Position? Skills? Team? We got you covered!
      </StyledFeature>
    </Grid>
  </div>
)

export default FeatureList
