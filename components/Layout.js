import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import OrderNowSection from './OrderNowSection';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout