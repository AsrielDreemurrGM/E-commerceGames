import styled from 'styled-components'
import { colors } from '../../styles/styles'

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${colors.gray};
`

export const Title = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.lightgray};
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
