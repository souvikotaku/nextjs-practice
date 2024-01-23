"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import React, { useState } from "react";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="text-black p-1"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="text-black p-1"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <hr />
      <label htmlFor="password">password</label>
      <input
        className="text-black p-1"
        id="password"
        type="password"
        value={user.email}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg md-4 mt-4 focus:outline-none focus:border-gray-600"
      >
        Signup
      </button>
    </div>
  );
};

export default SignupPage;
