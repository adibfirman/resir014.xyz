import * as React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'

import { SiteMetadata } from '../types/gatsby'
import { ProjectField } from '../types/fields'

import TemplateWrapper from '../layouts'

import { Button, Container, Badge } from '../chungking/components/ui'
import {
  Page,
  PageHeader,
  PageTitle,
  PageMetaItem,
  PageContent
} from '../chungking/components/page'
import { colors } from '../chungking/styles/variables'
import { BookmarkLink } from '../chungking/components/bookmark'
import { PostIndexItemMeta } from '../chungking/components/posts-index'
import { FeaturedProject, ProjectCard } from '../chungking/components/projects'

import getFeaturedProject from '../utils/getFeaturedProject'

interface DesignSystemPageProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
    projects: {
      edges: ProjectField[]
    }
  }
}

const buttonWrapperStyles: React.CSSProperties = {
  padding: '0.5rem 1rem 0.5rem 0px'
}

const buttonMarginStyles: React.CSSProperties = {
  marginRight: '1rem'
}

const DesignSystemPage: React.SFC<DesignSystemPageProps> = ({ data }) => {
  const testProject = getFeaturedProject(data.projects.edges, 'Broville v11')
  const testProjectNode = testProject.node
  const testProjectTags = testProjectNode.fields.tags
    ? (JSON.parse(testProjectNode.fields.tags) as string[])
    : undefined

  return (
    <TemplateWrapper>
      <Page>
        <Helmet
          title={`Chungking Design System · ${data.site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { property: 'og:title', content: 'Chungking Design System' },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description
            }
          ]}
        />
        <article>
          <PageHeader>
            <PageTitle>Chungking Design System</PageTitle>
          </PageHeader>
          <PageContent>
            <Container>
              <h2>Components</h2>
              <h3>Badge</h3>
              <WrapperRoot>
                <div style={buttonWrapperStyles}>
                  <Badge>henlo</Badge> <Badge>it's a badge</Badge>
                </div>
              </WrapperRoot>
              <h3>Button</h3>
              <WrapperRoot>
                <div style={buttonWrapperStyles}>
                  <Button style={buttonMarginStyles}>Primary</Button>
                  <Button disabled>Disabled</Button>
                </div>
                <div style={buttonWrapperStyles}>
                  <Button size="sm" style={buttonMarginStyles}>
                    Small
                  </Button>
                  <Button size="sm" disabled>
                    Disabled
                  </Button>
                </div>
                <div style={buttonWrapperStyles}>
                  <Button size="lg" style={buttonMarginStyles}>
                    Large
                  </Button>
                  <Button size="lg" disabled>
                    Disabled
                  </Button>
                </div>
                <div style={buttonWrapperStyles}>
                  <Button color="secondary" style={buttonMarginStyles}>
                    Secondary
                  </Button>
                  <Button color="secondary" disabled>
                    Disabled
                  </Button>
                </div>
                <div style={buttonWrapperStyles}>
                  <Button color="danger" style={buttonMarginStyles}>
                    Danger
                  </Button>
                  <Button color="danger" disabled>
                    Disabled
                  </Button>
                </div>
                <div style={buttonWrapperStyles}>
                  <Button color="white" style={buttonMarginStyles}>
                    White
                  </Button>
                  <Button color="white" disabled>
                    Disabled
                  </Button>
                </div>
              </WrapperRoot>
              <h2>Posts</h2>
              <h3>Paragraph</h3>
              <WrapperRoot>
                <div style={{ padding: '0' }}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem voluptate
                    libero delectus nesciunt vitae atque beatae placeat minus cumque sequi assumenda
                    quidem voluptas dicta nostrum modi, exercitationem ad ex.
                  </p>
                  <p>
                    Ut, a adipisci cum sequi cumque perspiciatis iure placeat reiciendis inventore
                    aut tempore libero, nobis ullam sit modi, tempora nam consequatur laboriosam
                    harum. Repellat quibusdam quia quos rerum cupiditate distinctio.
                  </p>
                </div>
              </WrapperRoot>
              <h3>Lists</h3>
              <WrapperRoot>
                <div style={{ padding: '0' }}>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
                      laudantium.
                    </li>
                    <li>
                      Exercitationem voluptas, rerum quo magnam velit quia adipisci quos unde?
                    </li>
                    <li>
                      Voluptate id pariatur sint provident aliquam aspernatur earum illum explicabo.
                    </li>
                  </ul>
                  <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, illo.</li>
                    <li>
                      Explicabo necessitatibus repudiandae sed nulla expedita. Non, perspiciatis.
                      Iusto, id?
                    </li>
                    <li>
                      Labore inventore ratione perferendis, error voluptates suscipit impedit
                      laborum magni.
                    </li>
                  </ol>
                </div>
              </WrapperRoot>
              <h3>Blockquote</h3>
              <WrapperRoot>
                <div style={{ padding: '16px 0 0' }}>
                  <blockquote>The quick brown fox jumps over the lazy dog.</blockquote>
                </div>
              </WrapperRoot>
              <h3>Bookmark Link</h3>
              <WrapperRoot>
                <div style={{ padding: '0 0 16px' }}>
                  <BookmarkLink
                    title="Accessibility is not a “React Problem”"
                    link="https://www.netlify.com/blog/2019/02/25/accessibility-is-not-a-react-problem/"
                  />
                </div>
              </WrapperRoot>
              <h3>Post Metadata</h3>
              <WrapperRoot>
                <PostIndexItemMeta>
                  <PageMetaItem>
                    <time className="dt-published" dateTime="2019-03-03T12:00:00">
                      03 March 2019
                    </time>
                  </PageMetaItem>
                  <PageMetaItem className="p-category">Category</PageMetaItem>
                  <hr />
                </PostIndexItemMeta>
              </WrapperRoot>
              <h2>Projects</h2>
              <h3>Featured Project</h3>
              <FeaturedProject key={testProject.node.frontmatter.title} node={testProject.node} />
              <h3>Project Card</h3>
              <h4>Without Image</h4>
              <ProjectCard
                title={testProjectNode.frontmatter.title}
                description={testProjectNode.fields.description || testProjectNode.fields.lead}
                tags={testProjectTags}
              />
              <h4>With Image</h4>
              <ProjectCard
                image={testProjectNode.frontmatter.header_image}
                title={testProjectNode.frontmatter.title}
                description={testProjectNode.fields.description || testProjectNode.fields.lead}
                tags={testProjectTags}
              />
            </Container>
          </PageContent>
        </article>
      </Page>
    </TemplateWrapper>
  )
}

export default DesignSystemPage

export const pageQuery = graphql`
  query DesignSystemPageQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author {
          name
          description
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
      sort: { fields: [fields___year], order: DESC }
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            year
            description
            tags
            slug
            category
            lead
            project_url
            jumpToProject
          }
          frontmatter {
            title
            header_image {
              childImageSharp {
                fluid(maxWidth: 1140) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const WrapperRoot = styled('div')`
  margin-bottom: 3rem;
  padding: 1rem 1.5rem;
  background-color: ${colors.grey90};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
`