import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import {Menu, Profile} from '../Container'
import Particles from 'react-particles-js'

const ParticlesBackground = () => {
  return (
    <Particles
      css={{
        position: `absolute`,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }}
      params={{
        'particles': {
          'number': {
            'value': 80,
            'density': {
              'enable': true,
              'value_area': 700
            }
          },
          'color': {
            'value': '#e2e2e2'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 4,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#cccccc',
            'opacity': 0.4,
            'width': 1
          },
          'move': {
            'enable': true,
            'speed': 5,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'window',
          'events': {
            'onhover': {
              'enable': false,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': false,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 400,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 400,
              'size': 40,
              'duration': 2,
              'opacity': 8,
              'speed': 3
            },
            'repulse': {
              'distance': 150,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      }} />
  )
}

const Header = ({data, ...props}) => {
  const {
    isHome
  } = props

  if (isHome) {
    return (
      <header className={'main-header'}>
        <Menu />
        <ParticlesBackground />
        {/*<Img fixed={data.headerImage.childImageSharp.fixed}*/}
        {/*style={{*/}
        {/*position: 'absolute',*/}
        {/*left: 0,*/}
        {/*top: 0,*/}
        {/*width: '100%',*/}
        {/*height: '100%',*/}
        {/*zIndex: '-1'*/}
        {/*}} />*/}
        {data.profile && <Profile profile={data.profile} image={data.profileImage.childImageSharp.fixed} />}
      </header>
    )
  }

  return (
    <>
    <Menu />
    <header className="background blog-header">
      <ParticlesBackground />
      {/*<Img fixed={data.footerImage.childImageSharp.fixed} style={{zIndex: '-1', height: '100%'}} />*/}
    </header>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
            query HeaderQuery {
              headerImage: file(relativePath: {eq: "images/header_bg.jpg"}) {
                childImageSharp {
                  fixed(width: 1900, height: 500, cropFocus: CENTER) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
              profileImage: file(relativePath: {eq: "images/profile_picture.jpg"}) {
                childImageSharp {
                  fixed(width: 315, height: 400, cropFocus: CENTER) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
              footerImage: file(relativePath: {eq: "images/footer_bg.jpg"}) {
                childImageSharp {
                  fixed(width: 1900, height: 470, cropFocus: CENTER) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
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
    render={data => <Header data={data} {...props} />}
  />
)