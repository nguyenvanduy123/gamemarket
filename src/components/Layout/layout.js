

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../views/pages/header/Header";
import Footer from "../../views/pages/footer/Footer";

const Layout = ({ children, title }) =>
{
  return (
    <>
     
      <div className={`main bg-cover`}>
        
        <Header />
        <main className="site-main-content">
          <div className="site-main-content__wrap">
              {children}
           </div>
        </main>
              
        <Footer/>
       
      
      </div>
    </>
  );
};

export default Layout;
