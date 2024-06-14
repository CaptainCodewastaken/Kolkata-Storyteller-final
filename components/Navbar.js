import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const handleSignIn = async () => {
    await signIn("github", { callbackUrl: "/" });
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <nav className="bg-[#000614] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold">Kolkata Storyteller</div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} className="text-white text-xl" />
          </button>
        </div>
        <div className="hidden md:flex md:flex-row md:justify-end">
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
      </div>

      {/* Sidebar for smaller screens (phone and smaller tablets) */}
      <div className={`md:hidden ${showSidebar ? 'block' : 'hidden'}`}>
        <div className="container mx-auto">
          <div className="mt-4">
            <Link href="/" className="text-white block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-white block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-gray-300">About</Link>
            <Link href="/features" className="text-white block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-gray-300">Features</Link>
            {session ? (
              <>
                <Link href="/dashboard" className="text-white block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-gray-300">Dashboard</Link>
                <button onClick={handleSignOut} className="text-white block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-gray-300">Sign out</button>
              </>
            ) : (
              <button onClick={handleSignIn} className="text-white block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-gray-300">Login</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
