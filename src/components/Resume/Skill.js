import React, {Component} from "react"

import {
    Progress
} from 'reactstrap';


class Skill extends Component {
    render() {
        const {title, percent} = this.props;

        return (
            <div className="progress-list__skill">
                <p>
                    <span className="progress-list__skill-title">{title}</span>
                    <span className="progress-list__skill-value">{percent}%</span>
                </p>
                <Progress value={percent} max={100} />
            </div>
        )
    }
}

export default Skill