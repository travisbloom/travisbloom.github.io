import React from 'react'
import { SEO } from '../components/seo'
import { Heading } from '../components/heading'
import { Box } from '../components/box'

export default () => (
  <>
    <SEO title="404: Not Found" />
    <Heading>Not Found</Heading>
    <Box>You just hit a route that doesn&#39;t exist... the sadness.</Box>
  </>
)
