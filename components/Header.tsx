import React from "react";
import { UserButton, SignIn } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-cyan-50 mb-5 shadow-sm bg-cyan-50">
      <div></div>
      <UserButton />
    </header>
  );
};

export default Header;
