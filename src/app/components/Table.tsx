"use client";
import React from "react";
interface userProps {
  id: number;
  name: string;
  email: string;
}

const Table: React.FC<userProps> = ({ id, name, email }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default Table;
