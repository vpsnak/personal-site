import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
// import 'bootstrap/dist/css/bootstrap.css';
import '../../static/css/main.css';

const Layout = ({children, ...props}) => ((
        <>
        <Header path={props.path}/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
