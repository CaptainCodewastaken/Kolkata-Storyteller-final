"use client";

import React from 'react'
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
const Navbar = () => {
  const {user,isLoading,error}=useUser();
  return (
    <div>

      {user?<a href="@/api/auth/logout">Logout</a>:<a href="../pages/api/auth/login">Login</a>}
    </div>
  )
}

export default Navbar