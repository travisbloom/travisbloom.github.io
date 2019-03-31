import React from 'react'
import { Heading } from '../components/heading'
import { Flex } from '../components/flex'
import { Box } from '../components/box'
import { ExternalLink, InternalLink } from '../components/link'
import { Txt } from '../components/txt'

const Index: React.SFC<{}> = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    css={{ minHeight: '100vh' }}
    flexDirection="column"
  >
    <Box css={{ maxWidth: 665 }} p={3}>
      <Heading mb={3}>Hi, I'm Travis</Heading>
      <Heading as="h2" mb={3}>
        I'm currently working to bring transparency to pet insurance at{' '}
        <ExternalLink href="https://www.pawlicy.com/" target="_blank">
          Pawlicy Advisor
        </ExternalLink>{' '}
        as Co-founder and CTO.
      </Heading>
      <Heading as="h2">
        Previously, I led the engineering team at{' '}
        <ExternalLink href="https://www.rocketrip.com/" target="_blank">
          Rocketrip (YC W14)
        </ExternalLink>{' '}
        and built applications at{' '}
        <ExternalLink
          href="https://www.ge.com/careers/working-at-ge/digital-technology-leadership-program"
          target="_blank"
        >
          GE.
        </ExternalLink>
      </Heading>
      <Txt fontSize={3}>
        <ExternalLink pr={3} py={3} href="https://twitter.com/TravisBloom" target="_blank">
          @travisbloom
        </ExternalLink>
        <InternalLink px={3} py={3} to="/blog">
          Blog
        </InternalLink>
        <ExternalLink
          px={3}
          py={3}
          href="https://www.linkedin.com/in/travisjbloom/"
          target="_blank"
        >
          LinkedIn
        </ExternalLink>
      </Txt>
    </Box>
  </Flex>
)

export default Index
