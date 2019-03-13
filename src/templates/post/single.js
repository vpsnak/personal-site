import React, {Component} from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

import {
    FaLongArrowLeft,
    FaLinkedinSquare,
    FaFacebookSquare,
    FaFolderOpen
} from "react-icons/lib/fa"


import {Container, Row, Col} from 'reactstrap';

import PostReleated from './releated';

class PostSingle extends Component {

    goBack = (e) => {
        // e.preventDefault();
        // window.history.back();
    };

    render() {
        const {post} = this.props;

        return (
            <Container>
                <div className="article">
                    <Row>
                        <Col md={12}>
                            <a href="/" className="article__back-link" onClick={this.goBack}><FaLongArrowLeft /> Back</a>
                            <h1 className="article__title" dangerouslySetInnerHTML={{__html: post.title}} />
                            <p className="article_categories">
                                {post.categories &&
                                post.categories.map(category => (
                                    <span key={category.name}><FaFolderOpen /> {category.name}</span>
                                ))}
                            </p>
                            <p className="article_date">{post.date}</p>
                            <div dangerouslySetInnerHTML={{__html: post.content}} />
                            <p className="article__share">Share this post:
                                <a href="/"><FaLinkedinSquare /></a>
                                <a href="/"><FaFacebookSquare /></a>
                            </p>
                        </Col>
                    </Row>
                </div>
                <PostReleated/>
            </Container>
        )
    }
}

export default PostSingle

export const query = graphql`
  fragment PostMeta on wordpress__POST {
    date(formatString: "DD MMMM YYYY")
    categories {
      name
    }
  }
`;

PostSingle.propTypes = {
    post: PropTypes.object.isRequired
};
