import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import {MdCloudDownload} from 'react-icons/md'
import {Section} from '../Layout'
import Bio from '../../assets/Ευάγγελος Πάλλης Bio.pdf'

const Hi = (props) => {
  const {
    data
  } = props

  const info = data.profile

  return (
    <Section
      id={'hello'}
      title={'Hi_'}
      description={info ? info.content : ''}
    >
      <a aria-label="Download" href={Bio} target={`_blank`} rel={`noopener noreferrer`}>
        <button className={'section_btn site-btn'} css={{cursor: `pointer`, border: `none`}}>
          <MdCloudDownload size={20} className={'mr-1'} />
          Download CV
        </button>
      </a>
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
                  cv {
                    link
                  }
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