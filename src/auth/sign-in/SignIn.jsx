import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignInContainer = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
`;

const DataForm = styled.form`
    margin-top: 20px;
    display: inline-block;
`;

const DataContainer = styled.div`
    margin-bottom: 10px;
`;

const DataLabel = styled.label`
    display: block;
    text-align: left;
`;

const DataInput = styled.input`
`;

const SubmitButton = styled.button`
    border-radius: 5px;
    border-color: green;
    background-color: green;
`;

const SignIn = ({ authUser, signIn }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (authUser) {
            navigate("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authUser]);

    const onSubmit = (e) => {
        e.preventDefault();

        signIn({
            email: e.target.email.value,
            password: e.target.password.value,
        });
    }

    return (
        <SignInContainer>
            <h1>Sign In</h1>
            <DataForm onSubmit={onSubmit}>
                <DataContainer>
                    <DataLabel>Email</DataLabel>
                    <DataInput name="email" type="text" />
                </DataContainer>
                <DataContainer>
                    <DataLabel>Password</DataLabel>
                    <DataInput name="password" type="password" />
                </DataContainer>
                <SubmitButton type="submit">Sign In</SubmitButton>
            </DataForm>
        </SignInContainer>
    );
}

export default SignIn;