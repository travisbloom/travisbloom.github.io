import * as React from 'react'
import { Txt } from './txt'
import { styled } from './styled'

export interface IHeadingProps extends React.ComponentPropsWithoutRef<typeof Txt> {
  as?: 'h1' | 'h2' | 'h3'
}

const H3 = styled(Txt)<any>`
  text-transform: uppercase;
`

export const Heading: React.SFC<IHeadingProps> = props => {
  const { as, fontSize } = props
  if (as === 'h1') {
    return <Txt fontWeight={300} fontSize={fontSize || 7} {...props} />
  }
  if (as === 'h2') {
    return <Txt fontWeight={300} fontSize={fontSize || [4, 5]} {...props} />
  }
  return <H3 fontWeight={300} fontSize={fontSize || 3} {...props} />
}
Heading.defaultProps = {
  as: 'h1',
  m: 0,
}
