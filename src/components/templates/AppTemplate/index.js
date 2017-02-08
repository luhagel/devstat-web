import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
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
  width: 15%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
`
const ContentWrapper = styled.section`
 width: 85%;
 margin-left: 15%;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`

const Footer = styled.footer`
  margin-top: auto;
  z-index: 999;
`

const AppTemplate = ({ header, side, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {side && <Side>{side}</Side>}
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
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
