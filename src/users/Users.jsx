import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DeleteUser from "./actions/DeleteModal";

const UsersContainer = styled.table`
  margin: auto;
  width: 80%;
  margin-top: 60px;
  border-collapse: collapse; 
`;

const UserTableHead = styled.thead`
  background-color: #ddd5d5;
`;

const UserTableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #ddd5d5;
  }
`;

const UserTableHeaderCell = styled.th`
`;

const UserRow = styled.tr`
`;

const UserCell = styled.td`
  display: table-cell;
`;

const UserEditButton = styled.button`
  margin-right: 10px;
  background-color: #bebec1;
`;

const UserDeleteButton = styled.button`
  background-color: #e60000;
`;

const Users = ({ users, fetchUsers, userDelete }) => {
  const [selectedToDelete, setSelectedToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onEdit = (user) => {
    navigate(`/users/${user.id}`);
  }

  return (
    <>
      {
        selectedToDelete && <DeleteUser user={selectedToDelete} setSelectedToDelete={setSelectedToDelete} userDelete={userDelete} />
      }
      <UsersContainer>
        <UserTableHead>
          <UserRow>
            <UserTableHeaderCell>ID</UserTableHeaderCell>
            <UserTableHeaderCell>Full name</UserTableHeaderCell>
            <UserTableHeaderCell>Email</UserTableHeaderCell>
            <UserTableHeaderCell>Role</UserTableHeaderCell>
            <UserTableHeaderCell>Actions</UserTableHeaderCell>
          </UserRow>
        </UserTableHead>
        <UserTableBody>
          {
            users.map(user => (
              <UserRow key={user.id}>
                <UserCell>{user.id}</UserCell>
                <UserCell>{user.fullname}</UserCell>
                <UserCell>{user.email}</UserCell>
                <UserCell>{user.role}</UserCell>
                <UserCell>
                  <UserEditButton onClick={() => onEdit(user)}>Edit</UserEditButton>
                  <UserDeleteButton onClick={() => setSelectedToDelete(user)}>Delete</UserDeleteButton>
                </UserCell>
              </UserRow>
            ))
          }
        </UserTableBody>
      </UsersContainer>
    </>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  fetchUsers: PropTypes.func.isRequired
}

export default Users;
