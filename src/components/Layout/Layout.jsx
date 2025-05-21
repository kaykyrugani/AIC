import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO/SEO';
import Header from '../../sections/Header/Header';
import Footer from '../../sections/Footer/Footer';
import siteConfig from '../../config/site';

const Layout = ({ children, seoProps = {} }) => {
  return (
    <>
      <SEO {...seoProps} />
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
    path: PropTypes.string,
  }),
};

export default Layout;
