import Link from "next/link";
import { motion } from "motion/react";
import Button from "./components/Button";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-7">
      <h1>Home page</h1>
      <Link href={"/user"}>
        <Button title="User" />
      </Link>
      <Link href={"/motion"}>
        <Button title="Motion" />
      </Link>
      <Link href={"/product"}>
        <Button title="Product" />
      </Link>
    </div>
  );
}
