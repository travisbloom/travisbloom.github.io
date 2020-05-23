import React from 'react'
import { Heading as BaseHeading, HeadingProps, Link as BaseLink, Box as BaseBox } from 'theme-ui'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'

type ForwardRef<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>
type WithVariants<P, V extends string> = Omit<P, 'variant'> & { variant?: V }

export const Heading = BaseHeading as ForwardRef<
  HTMLHeadingElement,
  WithVariants<HeadingProps, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
>

export const InternalLink: ForwardRef<HTMLAnchorElement, GatsbyLinkProps<any>> = React.forwardRef(
  (props, ref) => (
    <BaseBox
      // @ts-ignore
      ref={ref}
      as={GatsbyLink}
      variant="styles.a"
      {...props}
      __themeKey="links"
    />
  ),
)

export {
  Box,
  Flex,
  Button,
  Link as ExternalLink,
  Text as Txt,
  Image as Img,
  Card,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Progress,
  Donut,
  Spinner,
  Avatar,
  Badge,
  Close,
  Alert,
  Divider,
  Embed,
  AspectRatio,
  AspectImage,
  Container,
  NavLink,
  Message,
  IconButton,
  MenuButton,
} from 'theme-ui'
export { SEO } from './seo'
export { Header } from './header'

import emotionStyled from '@emotion/styled'

export const styled = emotionStyled
