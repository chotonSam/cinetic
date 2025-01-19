"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/");
  };

  return (
    <div className="md:ml-5 md:text-2xl text-xl">
      {auth ? (
        <>
          <a className="cursor-pointer flex gap-2  " onClick={logout}>
            <FaSignOutAlt />{" "}
            <span className="md:text-base text-sm ">Sign Out</span>
          </a>
        </>
      ) : (
        <Link href="/login" className="flex gap-2  ">
          <FaSignInAlt /> <span className="md:text-base text-sm">Sign In</span>
        </Link>
      )}
    </div>
  );
};

export default SignInOut;
