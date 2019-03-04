import React, {Component} from 'react'

import {
    Row,
    Col,
    Modal,
    ModalBody,
    ModalHeader
} from 'reactstrap';

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {

        const {item} = this.props;

        const client = item.spirit_project_meta.spirit_project_client;
        const link = item.spirit_project_meta.spirit_project_client_link;
        const stacks = item.spirit_project_stacks.map((stack) =>
            <li key={stack.slug}>{stack.name}</li>
        );

        return (
            <Row className={"project-card"} onClick={this.toggle}>
                <Col md={6} lg={5} className={"project-card__img"}>
                    <img width={460} height={460} src={item.featured_media ? item.featured_media.source_url.replace(/^http:\/\//i, 'https://') : '#'} alt={item.title} />
                </Col>
                <Col md={6} lg={7} className={"project-card__info"}>
                    <h3 className="project-card__title" dangerouslySetInnerHTML={{__html: item.title}} />
                    <p className="project-card__description" dangerouslySetInnerHTML={{__html: item.content}} />
                    <p className="project-card__stack">Used stack:</p>
                    <ul className="tags">{stacks}</ul>
                    {link ?
                        <a href={link} target={"_blank"} className="project-card__link">{client ? client : link}</a> : ''}
                </Col>
                <Modal isOpen={this.state.modal} size={"lg"} modalClassName={"portfolio-modal"} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} className={"modal-header"}>
                    </ModalHeader>
                    <ModalBody className={"modal-body col-md-11 col-lg-9 ml-auto mr-auto"}>
                        <p className="portfolio-modal__title" dangerouslySetInnerHTML={{__html: item.title}} />
                        <img className="portfolio-modal__img" width={"100%"} height={"auto"} src={item.featured_media ? item.featured_media.source_url.replace(/^http:\/\//i, 'https://') : '#'} alt={item.title} />
                        <p className="portfolio-modal__description" dangerouslySetInnerHTML={{__html: item.content}} />
                        <div className="portfolio-modal__link">
                            {link ? <a href={link} target={"_blank"}>{client ? client : link}</a> : ''}
                        </div>
                        <div className="portfolio-modal__stack">
                            <p className="portfolio-modal__stack-title">Using stack:</p>
                            <ul className="tags">{stacks}</ul>
                        </div>
                    </ModalBody>
                    {/*<ModalFooter>*/}
                    {/*<Button color="secondary" onClick={this.toggle}>Cancel</Button>*/}
                    {/*</ModalFooter>*/}
                </Modal>
            </Row>
        )
    }
}

export default ProjectItem

