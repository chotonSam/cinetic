// components/Logo.js
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-block bg-red-600 text-black  text-2xl  px-2 py-1 rounded-md border-2 border-black shadow-md hover:shadow-lg transition-shadow duration-300"
      style={{ fontFamily: "Anton, sans-serif" }} // Apply the imported font here
    >
      CINETIC
    </Link>
  );
}
