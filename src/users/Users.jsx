import React, { useEffect } from "react";
import PropTypes from 'prop-types'

const Users = ({users, fetchUsers}) => {
  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {
        users.map(user => <div>{user.name}</div>)
      }
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired).isRequired,
  fetchUsers: PropTypes.func.isRequired
}

export default Users;
