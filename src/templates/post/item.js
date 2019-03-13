import React, {Component} from 'react'
import {Link} from "gatsby";

import Img from "gatsby-image"

class PostItem extends Component {

    render() {

        const {item} = this.props;

        const fluidImage = item.featured_media ? item.featured_media.localFile.childImageSharp.fluid : null;

        return (
            <Link to={"/" + item.slug}>
                <div className="post-cards__card">
                    {fluidImage ? <Img fluid={fluidImage}/> : <div className="post-cards__img"/>}
                    <div className="post-cards__info">
                        <p className="post-cards__date">{item.date}</p>
                        <h3 className="post-cards_title" dangerouslySetInnerHTML={{__html: item.title}}/>
                        <p className="post-cards_description" dangerouslySetInnerHTML={{__html: item.content.replace(/(<([^>]+)>)/ig, "").substring(0, 130) + '...'}}/>
                    </div>
                </div>
            </Link>
        )
    }
}

export default PostItem

