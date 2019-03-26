import React, {Component} from "react"
import PropTypes from "prop-types"
import {InView} from 'react-intersection-observer'

import {Container, Row, Col} from 'reactstrap';

class Section extends Component {
    constructor(props) {
        super(props);
        this.animateText = this.animateText.bind(this);
        this.state = {
            active: false,
            inView: false,
            animate: true,
            title: this.props.title
        };
    }

    // handleScroll = () => {
    //     const top = this.sectionTitle.getBoundingClientRect().top;
    //     if ((top) >= 0 && (top) <= window.innerHeight) {
    //         window.removeEventListener('scroll', this.handleScroll);
    //         this.setState({
    //             animate: true,
    //             inView: true
    //         });
    //     }
    // };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.animate && this.state.inView && !this.state.active) {
            this.animateText(this.state.title, '', 100)
        }
    }

    animateText(text, current, interval) {
        if (text.length > 0 && this.state.title) {
            current += text.substr(0, 1);
            this.setState({title: current, active: true});
            setTimeout(() => {
                this.animateText(text.substr(1), current, interval);
            }, interval);
        } else {
            this.setState({animate: false, active: false});
        }
    }

    render() {
        const {children, id, extraClass = "section", description} = this.props;

        return (
            <>
            <Container id={id} tag="section" className={extraClass}>
                <Row>
                    <Col md="10">
                        <InView onChange={(inView) => this.setState({inView: inView})} triggerOnce>
                            {({inView, ref}) => (
                                <h2 className="section__title" ref={ref}>{this.state.title}</h2>
                            )}
                        </InView>
                        {description ? <p className="section__description">{description}</p> : ''}
                    </Col>
                </Row>
                {children}
            </Container>
            </>
        )
    }
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Section
