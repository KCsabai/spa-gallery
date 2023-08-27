import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Users from "../../users";
import SignUp from "../../auth/sign-up";
import SignIn from "../../auth/sign-in";

const ContentContainer = styled.div`
  text-align: center;
`;

class Content extends Component {
  render() {
    return (
        <ContentContainer>
          <Routes>
              <Route exact path="/users" element={<Users />} />
              <Route exact path="/sign-up" element={<SignUp />} />
              <Route exact path="/sign-in" element={<SignIn />} />
          </Routes>
          <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            theme="colored"
          />
        </ContentContainer>
    );
  }
}

export default Content;