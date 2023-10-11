import React from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
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

const SelectInput = styled.select`
    width: 100%;
`;

const SubmitButton = styled.button`
    border-radius: 5px;
    border-color: green;
    background-color: green;
`;

const SignUp = ({ signUp }) => {
    const onSubmit = (e) => {
        e.preventDefault();

        signUp({
            fullname: e.target.fullname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value
        });
    }

    return (
        <SignUpContainer>
            <h1>Sign Up</h1>
            <DataForm onSubmit={onSubmit}>
                <DataContainer>
                    <DataLabel>Full Name</DataLabel>
                    <DataInput name="fullname" type="text" />
                </DataContainer>
                <DataContainer>
                    <DataLabel>Email</DataLabel>
                    <DataInput name="email" type="text" />
                </DataContainer>
                <DataContainer>
                    <DataLabel>Password</DataLabel>
                    <DataInput name="password" type="password" />
                </DataContainer>
                <DataContainer>
                    <DataLabel>Role</DataLabel>
                    <SelectInput name="role">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </SelectInput>
                </DataContainer>
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </DataForm>
        </SignUpContainer>
    );
}

export default SignUp;