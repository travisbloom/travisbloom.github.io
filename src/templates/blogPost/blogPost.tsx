import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Heading } from '../../components/heading'
import { Box } from '../../components/box'
import { InternalLink } from '../../components/link'
import { styled } from '../../components/styled'
import { theme } from '../../theme'
import { Container, TextContainer } from '../../components/container'
import { Header } from '../../components/header'
import { Txt } from '../../components/txt'
import { Flex } from '../../components/flex'

const BlogPostContent = styled(Box)`
  font-size: ${theme.fontSizes[3]}px;
  p,
  ul {
    margin-bottom: ${theme.space[3]}px;
  }
  ol,
  ul {
    list-style: initial;
  }
  li {
    margin-bottom: ${theme.space[2]}px;
    margin-inline-start: ${theme.space[4]}px;
  }

  @media (min-width: ${theme.minSize.small}px) {
    li {
      margin-inline-start: ${theme.space[5]}px;
    }
  }

  strong {
    font-weight: bold;
  }
  img {
    max-width: 100%;
    margin: ${theme.space[2]}px 0;
  }

  @media (min-width: ${theme.minSize.small}px) {
    img {
      max-width: 50%;
      max-height: 50%;
      margin: ${theme.space[2]}px ${theme.space[2]}px;
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
    border-left: 7px solid ${theme.colors.darkGrey};
  }

  h2 {
    font-size: ${theme.fontSizes[4]}px;
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
    <Box>
      <SEO title={`${post.frontmatter.title} | Travis Bloom`} />
      <TextContainer px={3} py={3}>
        <Header>
          <InternalLink to="/blog" mx={4}>
            Back To All Posts
          </InternalLink>
        </Header>
        <Heading fontSize={[5, 6]}>{post.frontmatter.title}</Heading>
        <Txt fontWeight={'bold'} fontSize={4}>
          {post.frontmatter.date}
        </Txt>
        <BlogPostContent mt={3} mb={5} dangerouslySetInnerHTML={{ __html: post.html }} />
        <Flex justifyContent="space-between" flexDirection={['column', 'row']}>
          <BottomLinks width={[1, 0.5]} mr={[0, 2]} textAlign={['center', 'left']}>
            {previous && (
              <InternalLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </InternalLink>
            )}
          </BottomLinks>
          <BottomLinks width={[1, 0.5]} textAlign={['center', 'right']} ml={[0, 2]} mt={[3, 0]}>
            {next && (
              <InternalLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </InternalLink>
            )}
          </BottomLinks>
        </Flex>
      </TextContainer>
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
