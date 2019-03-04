import React, {Component} from 'react'
import { NavItem } from 'reactstrap';
import { Link } from "react-scroll";

class Item extends Component {

    render() {

        const {item} = this.props;

        return (
            <NavItem id={"menu-item-" + item.wordpress_id} className={"menu-item menu-item-type-" + item.type + " menu-item-object-" + item.object + " menu-item-" + item.wordpress_id}>
                <Link
                    activeClass="active"
                    to={item.object_slug}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration= {800}
                >{item.title}</Link>
            </NavItem>
        )
    }
}

export default Item

