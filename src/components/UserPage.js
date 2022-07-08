import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

const UserPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            // URL where data lives
            const url = 'https://reqres.in/api/users?page=1';
            // Reach out to that URL
            const response = await fetch(url);
            // Reformat our data into something javascript understands
            const json = await response.json();

            console.log("USERS GRABBED")
            setUsers(json.data);
        }

        getAllUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {users.map((user) =>
                <UserCard
                    image={user.avatar}
                    email={user.email}
                    username={`${user.first_name} ${user.last_name}`}
                    color={user.id % 2 === 0 ? "gray" : "lightgray"}
                />
            )}
        </div>
    );
};

export default UserPage;