import React from 'react'
import colorLogo from '../../content/assets/color-logo.png'
import { Flex } from './flex'
import { Img } from './img'
import { Box } from './box'
import { InternalLink } from './link'
import { Txt } from './txt'

export const Header: React.SFC<{}> = ({ children }) => (
  <Flex as="header" fontSize={4} alignItems="center">
    <Txt fontSize={'8px'} css={{ width: 60, height: 60 }}>
      <InternalLink to="/">
        <Img src={colorLogo} width={60} borderRadius={20} alt="Logo to go back home" />
      </InternalLink>
    </Txt>
    {children}
  </Flex>
)
