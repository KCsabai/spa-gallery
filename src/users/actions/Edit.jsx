import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditContainer = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 50%;
    padding: 10px;
    border: 1px solid #ccc;
`;

const EditHeader = styled.h1``;

const EditForm = styled.form`
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

const Edit = ({ user, fetchUser, updateSelected, userUpdate, updatedSuccessfully }) => {
    const { id: userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!user && updatedSuccessfully) {
            navigate('/users');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updatedSuccessfully]);

    const updateData = (e) => {
        updateSelected({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const updateUserData = (e) => {
        e.preventDefault();

        userUpdate({
            id: user.id,
            fullname: user.fullname,
            email: user.email,
            password: user.password,
            role: user.role
        });
    }
    
    return (
        <EditContainer>
        <EditHeader>Edit</EditHeader>
        {
            user && (
                <EditForm onSubmit={updateUserData}>
                    <DataContainer>
                        <DataLabel>Full Name</DataLabel>
                        <DataInput name="fullname" type="text" value={user.fullname} onChange={updateData} />
                    </DataContainer>
                    <DataContainer>
                        <DataLabel>Email</DataLabel>
                        <DataInput name="email" type="text" value={user.email} onChange={updateData} />
                    </DataContainer>
                    <DataContainer>
                        <DataLabel>Password</DataLabel>
                        <DataInput name="password" type="password" value={user.password || ''} onChange={updateData} />
                    </DataContainer>
                    <DataContainer>
                        <DataLabel>Role</DataLabel>
                        <SelectInput name="role" value={user.role} onChange={updateData} >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </SelectInput>
                    </DataContainer>
                    <SubmitButton type="submit">Edit</SubmitButton>
                </EditForm>
            )
        }
        </EditContainer>
    );
}

Edit.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }),
}

export default Edit;