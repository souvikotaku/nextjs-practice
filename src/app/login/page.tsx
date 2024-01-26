"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("signup successful", response.data);
      router.push("/");
    } catch (error: any) {
      console.log("login failed", error.message);
    } finally {
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">login</h1>

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
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg md-4 mt-4 focus:outline-none focus:border-gray-600"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
