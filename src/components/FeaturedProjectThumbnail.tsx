import * as React from 'react'
import styled, { css } from 'styled-components'

import mediaQueries from '../utils/mediaQueries'

interface FeaturedProjectThumbnailProps {
  className?: string
  image: string
}

const FeaturedProjectThumbnail: React.SFC<FeaturedProjectThumbnailProps> = ({ image, className }) => (
  <div className={className} />
)

export default styled(FeaturedProjectThumbnail)`
  display: none

  @media ${mediaQueries.md} {
    display: block
  }

  img {
    margin: 0
    verticalAlign: middle
    objectFit: cover
  }

  ${props => props.image && css`
    background-image: url(${props.image});
    background-size: cover;
    background-position-y: center;
  `}
`
