import React from 'react'
import { SEO } from '../components/seo'
import { Heading, Box } from 'theme-ui'
import { Header, Txt } from '../components'

export default () => (
  <>
    <SEO title="404: Not Found" />
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Header>
        <Txt ml={4} pb={2} variant="h3" sx={{ fontSize: 1 }}>
          Whoops...this page doesn't exist
        </Txt>
      </Header>
      <Box sx={{ width: '100%', height: 0, paddingBottom: '145%', position: 'relative' }}>
        <iframe
          src="https://giphy.com/embed/xTiTncVep2khPGhK1i"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  </>
)
