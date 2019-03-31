import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, IBaseBoxProps } from './box'
import { LocationDescriptor } from 'history'
import _ from 'lodash'
import { styled } from './styled'
import { alignSelf, flex, fontSize, order, space, width, bgColor } from 'styled-system'
import { TextColorProps, textColor } from './componentUtils'
import { theme } from '../theme'

export interface ILinkProps extends IBaseBoxProps {
  to?: LocationDescriptor
  replace?: boolean
  innerRef?: (node: HTMLAnchorElement | null) => void
  as?: any
}

export const InternalLink = styled(GatsbyLink)`
  ${space}
  ${width}
  ${fontSize}
  ${textColor}
  ${bgColor}
  ${flex}
  ${order}
  ${alignSelf}
  display: inline-block;
  text-decoration: none;
  :hover {
    color: ${theme.colors.black};
  }
`
InternalLink.defaultProps = {
  color: 'primary',
}

export const ExternalLink = styled.a`
  ${space}
  ${width}
  ${fontSize}
  ${textColor}
  ${bgColor}
  ${flex}
  ${order}
  ${alignSelf}
  display: inline-block;
  text-decoration: none;
  :hover {
    color: ${theme.colors.black};
  }
`

ExternalLink.defaultProps = {
  color: 'primary',
}
