import * as React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { media } from '../../styles/mixins'

interface FeaturedProjectThumbnailProps {
  className?: string
  image: {
    childImageSharp: {
      sizes: { [key: string]: any }
    }
  }
}

const FeaturedProjectThumbnail: React.SFC<FeaturedProjectThumbnailProps> = ({
  image,
  className
}) => (
  <div className={className}>
    <Img sizes={image.childImageSharp.sizes} alt="" />
  </div>
)

export default styled(FeaturedProjectThumbnail)`
  display: none;

  ${media.md`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  `} img {
    margin: 0;
    verticalalign: middle;
    objectfit: cover;
  }
`