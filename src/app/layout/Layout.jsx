import React from "react";
import Header from "./Header";
import Content from "./Content";

const Layout = ({ authUser, logout }) => {
    return (
        <>
          <Header authUser={authUser} logout={logout}/>
          <Content authUser={authUser} />
        </>
    )
}

export default Layout;