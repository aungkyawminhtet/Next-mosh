import React from "react";
import Table from "../components/Table";
import Link from "next/link";
import { BiDownArrow } from "react-icons/bi";
// @ts-ignore: fast-sort has types but package "exports" prevents resolution; ignore for now
import { sort } from "fast-sort";

interface userProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

const page = async ({
  searchParams,
}: {
  searchParams: { orderBy?: string };
}) => {
  const { orderBy } = await searchParams || {};

  const users: userProps[] = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((users) => users.json());

  const sorted: userProps[] = sort(users)
  .asc(orderBy === "name" ? 
    (user: userProps) => user.name : 
    (user: userProps) => user.email
  );
  // console.log("sorted", sorted);
  return (
    <div>
      <Link href={"/user/create"} className="btn btn-primary rounded mb-2">
        Create
      </Link>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Id</th>
            <th>
              <Link
                className="flex items-center space-x-2"
                href={"/user?orderBy=name"}
              >
                <BiDownArrow />
                <span>Name</span>
              </Link>
            </th>
            <th className="items-center">
              <Link
                className="flex items-center space-x-2"
                href={"/user?orderBy=email"}
              >
                <BiDownArrow />
                <span>Email</span>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user) => (
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
