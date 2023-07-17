import Link from "next/link";
import React from "react";
import Button from "../Button";
import { signIn, signOut, useSession } from "next-auth/react";

const SessionButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    <Button text="Sign out" onClick={() => signOut()} />;
  }
  return <Button text="Sign in" onClick={() => signIn()} />;
};

const Header = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href={"/"}>
        Home Page
      </Link>
      <Link
        className="transition-colors hover:text-blue-500"
        href={"/Dashboard"}
      >
        Dashboard
      </Link>
      <SessionButton />
    </header>
  );
};

export default Header;
