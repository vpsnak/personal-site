import React, {Component} from 'react'
import {Link} from "gatsby";

class PostItem extends Component {

    render() {

        const {item} = this.props;
        return (
            <Link to={"/" + item.slug}>
                <div className="post-cards__card">
                    <div className="post-cards__img">
                        <img width={350} height={350} src={item.featured_media ? item.featured_media.source_url.replace(/^http:\/\//i, 'https://') : '#'} alt={item.title} />
                    </div>
                    <div className="post-cards__info">
                        {/*{item.featured_media ?item.featured_media.localFile.relativePath : ''}*/}
                        <p className="post-cards__date">{item.date}</p>
                        <h3 className="post-cards_title" dangerouslySetInnerHTML={{__html: item.title}} />
                        <p className="post-cards_description" dangerouslySetInnerHTML={{__html: item.content.replace(/(<([^>]+)>)/ig, "").substring(0, 130) + '...'}} />
                    </div>
                </div>
            </Link>
        )
    }
}

export default PostItem

