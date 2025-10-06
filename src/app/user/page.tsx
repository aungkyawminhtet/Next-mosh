import React from "react";
import ProductCard from "../components/ProductCard";
import Card from "../components/Card";
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

  return (
    <div className="flex w-full h-screen bg-blue-100">
      <div className="mx-auto container flexflex-col bg-amber-300 justify-center items-center">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 justify-center gap-5">
            {users.map((user) => (

              <Card key={user.id} id={user.id} name={user.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
