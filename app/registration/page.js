import RegistrationForm from "@/components/auth/RegistrationForm";
import Link from "next/link";

export default function registrationPage() {
  return (
    <div className="bg-moviedb-black min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-6">
            Create Your Account
          </h1>

          <RegistrationForm />

          <div className="mt-6 text-gray-500">
            Already have an account?
            <Link href="/login">
              <span className="text-white hover:underline"> Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
