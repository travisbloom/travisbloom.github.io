import React from 'react'
import colorLogo from '../../content/assets/color-logo.png'
import { InternalLink, Txt, Flex, Img } from '.'

export const Header: React.SFC<{}> = ({ children }) => (
  <Flex as="header" sx={{ alignItems: 'center' }} mb={3}>
    <Txt sx={{ width: 40, height: 40, fontSize: '8px' }}>
      <InternalLink to="/">
        <Img src={colorLogo} width={60} sx={{ borderRadius: 10 }} alt="Logo to go back home" />
      </InternalLink>
    </Txt>
    {children}
  </Flex>
)
