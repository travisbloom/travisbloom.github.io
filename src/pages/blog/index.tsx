import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Box } from '../../components/box'
import { Heading } from '../../components/heading'
import { InternalLink } from '../../components/link'
import { TextContainer } from '../../components/container'
import { Flex } from '../../components/flex'
import { Header } from '../../components/header'

export const BlogIndex: React.SFC<IBlogIndexProps> = props => {
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  return (
    <TextContainer px={3} py={3}>
      <Header />
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Box key={node.fields.slug} mb={4}>
            <Flex justifyContent="space-between" flexDirection={['column', 'row']}>
              <Heading as="h2" fontSize={[4, 5]}>
                <InternalLink style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </InternalLink>
              </Heading>
              <Box mt={[0, '17px']} css={{ whiteSpace: 'nowrap' }} ml={[0, 3]}>
                {node.frontmatter.date}
              </Box>
            </Flex>
            <Box
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            />
          </Box>
        )
      })}
    </TextContainer>
  )
}

export default BlogIndex

interface IBlogIndexPost {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
    }
  }
}

interface IBlogIndexProps {
  data: {
    allMarkdownRemark: {
      edges: IBlogIndexPost[]
    }
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 340)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
