import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
// import 'bootstrap/dist/css/bootstrap.css';
import '../../static/css/main.css';

const Layout = ({children}) => ((
        <>
        <Header />
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
