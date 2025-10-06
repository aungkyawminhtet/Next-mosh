import React from "react";
import Table from "../components/Table";

interface userProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

const page = async () => {
  const users: userProps[] = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((users) => users.json());
  
  // console.log(users);

  return (
    <div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Table
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
