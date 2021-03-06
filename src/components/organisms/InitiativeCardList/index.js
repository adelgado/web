import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { InitiativeCard } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  & > * {
    margin: 0.5rem;
    width: calc(33% - 1rem);
    height: 250px;
    @media screen and (max-width: 1024px) {
      width: calc(50% - 1rem);
    }
    @media screen and (max-width: 640px) {
      width: calc(100% - 1rem);
    }
  }
`

const InitiativeCardList = ({ initiatives, ...props, reverse }) => {
  return (
    <Wrapper {...props}>
      {initiatives.map(initiative =>
        <InitiativeCard key={initiative.id} initiative={initiative} reverse={reverse} />
      )}
    </Wrapper>
  )
}

InitiativeCardList.propTypes = {
  initiatives: PropTypes.arrayOf(PropTypes.object).isRequired,
  reverse: PropTypes.bool
}

export default InitiativeCardList
