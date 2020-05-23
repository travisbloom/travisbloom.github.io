import React from 'react'
import { SEO } from '../components/seo'
import { Flex, Box, Heading, ExternalLink, Txt, InternalLink } from '../components'
const Index: React.SFC<{}> = () => (
  <>
    <SEO title={`Travis Bloom`} />
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: ['80vh', null, '100vh'],
        flexDirection: 'column',
      }}
    >
      <Box sx={{ maxWidth: 755 }} p={3}>
        <Heading mb={4} variant="h1">
          Hi, I'm Travis.
        </Heading>
        <Heading as="h2" variant="h2">
          <Box mb={4}>
            I founded{' '}
            <ExternalLink href="https://www.pawlicy.com/" target="_blank">
              Pawlicy Advisor
            </ExternalLink>{' '}
            to help people keep their pets healthy and happy.
          </Box>
          <Box>
            Previously, I led the engineering team at{' '}
            <ExternalLink href="https://www.rocketrip.com/" target="_blank">
              Rocketrip (YC W14)
            </ExternalLink>{' '}
            and built applications at{' '}
            <ExternalLink
              href="https://www.ge.com/careers/working-at-ge/digital-technology-leadership-program"
              target="_blank"
            >
              GE
            </ExternalLink>
            .
          </Box>
        </Heading>
        <Txt sx={{ fontSize: [2, 3], mt: 4 }}>
          <InternalLink sx={{ pr: 3, py: 4, display: 'inline-block' }} to="/blog">
            Blog
          </InternalLink>
          <ExternalLink
            sx={{ px: 3, py: 4, display: 'inline-block' }}
            href="https://www.linkedin.com/in/travisjbloom/"
            target="_blank"
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink
            sx={{ px: 3, py: 4, display: 'inline-block' }}
            href="https://twitter.com/TravisBloom"
            target="_blank"
          >
            @travisbloom
          </ExternalLink>
        </Txt>
      </Box>
    </Flex>
  </>
)

export default Index
