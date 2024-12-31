"use client";
import { performLogin } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { auth, setAuth } = useAuth();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        const lastRoute = Cookies.get("lastRoute") || "/";
        router.push(lastRoute);
        Cookies.remove("lastRoute");
      } else {
        setError("Please provide a valid login credential");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  console.log(auth);

  return (
    <>
      <div className="my-2 text-red-500">{error}</div>
      <form id="loginForm" className="space-y-4" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email or phone number"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <button
          type="submit"
          className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
