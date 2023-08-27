import React from "react";
import Header from "./Header";
import Content from "./Content";

const Layout = ({ authUser }) => {
    return (
        <>
          <Header authUser={authUser} />
          <Content />
        </>
    )
}

export default Layout;