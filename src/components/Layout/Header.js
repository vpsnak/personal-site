import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import {
    Profile,
    Menu
} from '../Container'

const Header = ({data, ...props}) => {
    const {
        isHome
    } = props;

    if (isHome)
        return (
            <header className={"main-header"}>
                <Menu />
                <Img fixed={data.headerImage.childImageSharp.fixed}
                     style={{
                         position: "absolute",
                         left: 0,
                         top: 0,
                         width: "100%",
                         height: "100%",
                         zIndex: '-1'
                     }} />
                {data.profile && <Profile profile={data.profile} image={data.profileImage.childImageSharp.fixed}/>}
            </header>
        );

    return (
        <>
        <Menu />
        <header className="background blog-header">
            <Img fixed={data.footerImage.childImageSharp.fixed} style={{zIndex: "-1", height: "100%"}} />
        </header>
        </>
    )
};

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
                  cv
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