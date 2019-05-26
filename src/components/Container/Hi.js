import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Fab from '@material-ui/core/Fab'
import {CloudDownload} from '@material-ui/icons'
import {Section} from '../Layout'

const Hi = (props) => {
  const {
    data
  } = props

  const info = data.profile

  // @TODO check why menu not scroll to this section
  return (
    <Section
      id={'hello'}
      title={'Hi_'}
      description={info ? info.content : ''}
    >
      {/*<Button waves='orange' className={"section_btn site-btn"}>button<Icon left>cloud</Icon></Button>*/}
      <Fab variant="extended" aria-label="Download" className={'section_btn site-btn'}>
        <CloudDownload />
        Download CV
      </Fab>
    </Section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
            query HiQuery {
              profile: wordpressPage(slug: {eq: "evangelos-pallis"}) {
                id
                wordpress_id
                title
                content
                acf {
                  job_title
                  age
                  phone
                  email
                  address
                  github
                  linkedin
                  facebook
                  #cv
                }
                #featured_media {
                #  localFile {
                #    childImageSharp {
                #      fluid(maxWidth: 1920) {
                #        ...GatsbyImageSharpFluid_withWebp
                #      }
                #    }
                #  }
                #}
              }
            }
    `}
    render={data => <Hi data={data} {...props} />}
  />
)