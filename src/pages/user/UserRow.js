const UserRow= (props) => {
    const { users } = props;
    return (
        <tr>
            <td>{users.id}</td>
            <td>{users.name}</td>
            <td>{users.age}</td>
            <td>{users.email}</td>
        </tr>
);
};

export default UserRow;