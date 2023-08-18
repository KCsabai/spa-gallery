import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="app-header">
            <h1>My Gallery</h1>
            <div className="app-header-options">
                <Link className="app-header-options-link" to="/users">Users</Link>
                <Link className="app-header-options-link" to="/sign-up">Sign Up</Link>
            </div>
        </div>
    );
}