import React from 'react'
import { graphql } from 'gatsby'

import { SEO } from '../../components/seo'
import { theme } from '../../components/theme'
import { styled, Box, Txt, Header, InternalLink, Heading, Flex } from '../../components'

const BlogPostContent = styled(Box)`
  font-size: ${theme.fontSizes[3]};
  line-height: 2;
  p,
  ul {
    margin-bottom: ${theme.space[4]};
  }
  ol,
  ul {
    list-style: initial;
  }
  li {
    margin-bottom: ${theme.space[2]};
    margin-inline-start: ${theme.space[4]};
  }

  @media (min-width: ${theme.minSize.sm}px) {
    li {
      margin-inline-start: ${theme.space[5]};
    }
  }

  strong {
    font-weight: bold;
  }
  img {
    max-width: 100%;
    margin: ${theme.space[2]} 0;
  }

  @media (min-width: ${theme.minSize.sm}px) {
    img {
      max-width: 50%;
      max-height: 50%;
      margin: ${theme.space[2]} ${theme.space[2]};
    }
  }

  img:nth-child(odd) {
    float: left;
  }
  img:nth-child(even) {
    float: right;
  }
  blockquote {
    padding-left: 40px;
    border-left: 7px solid ${theme.colors.gray[7]};
  }

  h2 {
    font-size: ${theme.fontSizes[4]};
    font-weight: bold;
  }

  h3 {
    font-weight: bold;
  }

  a {
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.black};
    }
  }
`

const BottomLinks = styled(Txt)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BlogPost: React.SFC<IBlogPostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Box px={3} py={3} sx={{ maxWidth: 745, mx: 'auto' }}>
      <SEO title={`${post.frontmatter.title} | Travis Bloom`} />
      <Header>
        <InternalLink to="/blog" sx={{ px: 3 }}>
          Back To All Posts
        </InternalLink>
      </Header>
      <Txt>{post.frontmatter.date}</Txt>
      <Heading>{post.frontmatter.title}</Heading>
      <BlogPostContent mt={3} mb={5} dangerouslySetInnerHTML={{ __html: post.html }} />
      <Flex sx={{ justifyContent: 'space-between', flexDirection: ['column', 'row'] }}>
        <BottomLinks sx={{ width: [1, 0.5], textAlign: ['center', 'right'] }} mr={[0, 2]}>
          {previous && (
            <InternalLink to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </InternalLink>
          )}
        </BottomLinks>
        <BottomLinks
          sx={{ width: [1, 0.5], textAlign: ['center', 'right'] }}
          ml={[0, 2]}
          mt={[3, 0]}
        >
          {next && (
            <InternalLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </InternalLink>
          )}
        </BottomLinks>
      </Flex>
    </Box>
  )
}

export default BlogPost

interface IBlogPostNode {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

interface IBlogPostProps {
  pageContext: {
    slug: string
    previous: IBlogPostNode
    next: IBlogPostNode
  }
  data: {
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
