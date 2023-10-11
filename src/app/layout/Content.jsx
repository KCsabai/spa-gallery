import React from "react";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Users from "../../users";
import EditUser from "../../users/actions/editContainer";
import SignUp from "../../auth/sign-up";
import SignIn from "../../auth/sign-in";
import Home from "./Home";

const ContentContainer = styled.div`
  text-align: center;
`;

const Content = ({ authUser }) => {
  return (
    <ContentContainer>
      <Routes>
        {
          authUser ? (
            <>
              <Route exact path="/users" element={<Users />} />
              <Route path="/users/:id" element={<EditUser />} />
            </>
          ) : (
            <>
              <Route exact path="/sign-up" element={<SignUp />} />
              <Route exact path="/sign-in" element={<SignIn />} />
            </>
          )
        }
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        theme="colored"
      />
    </ContentContainer>
)};

export default Content;