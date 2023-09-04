import React from "react";
import './styles.css';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logout = styled.a`
    margin-left: 10px;
    color: black;
    text-decoration: none;
    margin-top: 35px;
    decoration: none;
`;

export default function Header({ authUser, logout }) {
    return (
        <div className="app-header">
            <h1>My Gallery</h1>
            <div className="app-header-options">
                {
                    authUser ? (
                        <>
                            <Link className="app-header-options-link" to="/users">Users</Link>
                            <Logout href="#" onClick={logout}>Logout</Logout>
                        </>
                    ) : (
                        <>
                            <Link className="app-header-options-link" to="/sign-in">Sign In</Link>
                            <Link className="app-header-options-link" to="/sign-up">Sign Up</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
}