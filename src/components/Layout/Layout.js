import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import '../../static/css/main.css';

const Layout = ({children, ...props}) => {
    const {
        isHome = false
    } = props;
    return (
        <div className={`d-flex flex-column`}>
            <Header isHome={isHome} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
