import React from 'react'
import { graphql } from 'gatsby'
import { Box, SEO, Header, Flex, Heading, InternalLink } from '../../components'

export const BlogIndex: React.SFC<IBlogIndexProps> = props => {
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  return (
    <Box px={3} py={3} sx={{ maxWidth: 745, mx: 'auto' }}>
      <Header />
      <SEO title="All Posts | Travis Bloom" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Box key={node.fields.slug} mb={4}>
            <InternalLink to={node.fields.slug}>
              <Box>{node.frontmatter.date}</Box>
              <Heading mb={2} sx={{ fontSize: [5, 6] }}>
                {title}
              </Heading>
            </InternalLink>
            <Box
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            />
          </Box>
        )
      })}
    </Box>
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
          excerpt(pruneLength: 100)
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
