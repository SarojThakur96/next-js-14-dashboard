"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(true);
  return (
    <aside
      className={`${
        isSideBarOpen ? "w-32" : "w-10"
      } bg-cyan-50 h-screen duration-300`}
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      <Link href="/">Home</Link>
      <br />

      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/map">Map</Link>
    </aside>
  );
};

export default Sidebar;
