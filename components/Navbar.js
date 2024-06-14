"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const handleSignIn = async () => {
    await signIn("github", { callbackUrl: "/" });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <nav className="bg-[#000614] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">Kolkata Storyteller</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">About</Link>
          <Link href="/features" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Features</Link>
          {session ? (
            <>
              <Link href="/dashboard" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Dashboard</Link>
              <button onClick={handleSignOut} className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Sign out</button>
            </>
          ) : (
            <button onClick={handleSignIn} className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Login</button>
          )}
        </div>
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* Sidebar */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-8">
          <Link href="/" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white" onClick={toggleSidebar}>Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white" onClick={toggleSidebar}>About</Link>
          <Link href="/features" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white" onClick={toggleSidebar}>Features</Link>
          {session ? (
            <>
              <Link href="/dashboard" className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white" onClick={toggleSidebar}>Dashboard</Link>
              <button onClick={handleSignOut} className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Sign out</button>
            </>
          ) : (
            <button onClick={handleSignIn} className="text-white hover:text-gray-300 py-2 px-4 rounded-md shadow hover:shadow-lg hover:border hover:border-white">Login</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
