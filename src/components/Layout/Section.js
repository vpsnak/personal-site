import React, {Component} from "react"
import PropTypes from "prop-types"

import {Container, Row, Col} from 'reactstrap';

class Section extends Component {
    constructor(props) {
        super(props);

        this.animateText = this.animateText.bind(this);
        this.state = {
            inView: false,
            animate: false
        };
    }

    handleScroll = () => {
        const top = this.sectionTitle.getBoundingClientRect().top;
        if ((top) >= 0 && (top) <= window.innerHeight) {
            window.removeEventListener('scroll', this.handleScroll);
            this.setState({animate: true});
            this.setState({inView: true});
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.animate) {
            this.animateText(this.sectionTitle.innerHTML, '', 100)
        }
    }

    animateText(text, current, interval) {
        if (text.length > 0 && this.sectionTitle) {
            current += text.substr(0, 1);
            // console.log(this.sectionTitle);
            this.sectionTitle.innerHTML = current;
            setTimeout(() => {
                this.animateText(text.substr(1), current, interval);
            }, interval);
        } else {
            this.setState({animate: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        const {children, id, extraClass = "section", title, description} = this.props;

        return (
            <>
            <Container id={id} tag="section" className={extraClass}>
                <Row>
                    <Col md="10">
                        <h2 className="section__title" ref={node => this.sectionTitle = node}>{title}</h2>
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
