import * as React from 'react'
import globalStyles from './utils/globalStyles'

import 'typeface-zilla-slab'
import 'typeface-open-sans'

import 'normalize.css'
import 'prism-themes/themes/prism-atom-dark.css'

// inject global styles
globalStyles()

let styles: string
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

interface HtmlProps {
  body: any
  preBodyComponents: any
  postBodyComponents: any
  headComponents: any
}

module.exports = class HTML extends React.Component<HtmlProps, void> {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="144x144" href="/windows-tile-icon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.png" />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
