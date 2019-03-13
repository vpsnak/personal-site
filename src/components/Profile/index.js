import React, {Component} from "react"
// import {graphql, Link} from "gatsby"

import Section from "../Layout/Section"
import Fab from '@material-ui/core/Fab';
import {CloudDownload} from '@material-ui/icons';

class Profile extends Component {
    render() {

        return (
            <Section id={"hello"} title={"Hi_"} description={"Software programming started for me as a hobby at the age of 15. At the moment, I’m an experienced Web Developer. I have an excellent command of Wordpress. I am also familiar with Magento 1, Magento 2, PHP, SQL, CSS and JS and I have developed 15+ projects during the last year. At the same time, while working on my own projects I had the chance to dive into C, C++, C#, .NET and Python. \n" +
            "I am passionate about 3D printing/modelling and I love experimenting and developing IoT (Arduino, raspberry pi) applications. \n" +
            "I am currently looking for new opportunities to improve my knowledge and work on new technologies on my field, like React. If you are hoping to find a programmer who performs even on low caffeine levels feel free to contact me."}
            >
                {/*<Button waves='orange' className={"section_btn site-btn"}>button<Icon left>cloud</Icon></Button>*/}

                <Fab variant="extended" aria-label="Download" className={"section_btn site-btn"}>
                    <CloudDownload/>
                    Download CV
                </Fab>
            </Section>
        )
    }
}

export default Profile