import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

export const StyledLink = styled.a`
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  color: ${({ theme }) => theme.colors.primary[500]};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
`

export default function Link({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <NextLink href={href}>
      <StyledLink {...props} />
    </NextLink>
  )
}
