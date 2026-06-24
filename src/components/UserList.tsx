import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};

function UserList() {

    const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data: User[]) => {
    setUsers(data);
    setLoading(false);
})

    }, []);

    return (
        <div>
            <h2>Users</h2>

            {
loading
?
<p>Loading users...</p>
:
users.map((user) => (
    <p key={user.id}>
        {user.name}
    </p>
))
}

        </div>
    );
}

export default UserList;