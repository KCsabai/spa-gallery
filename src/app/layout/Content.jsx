import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Users from "../../users";
import SignUp from "../../auth/sign-up";

class Content extends Component {
  render() {
    return (
        <Routes>
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
    );
  }
}

export default Content;