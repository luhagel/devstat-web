import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Side = styled.aside`
  max-width: 20%;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`

const Footer = styled.footer`
  margin-top: auto;
`

const AppTemplate = ({ header, side, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {side && <Side>{side}</Side>}
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

AppTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  side: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
}

export default AppTemplate
