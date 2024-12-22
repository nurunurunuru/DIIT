"use client";
import { SignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Check if the user has the 'admin' role
      if (user?.publicMetadata?.role === "admin") {
        // Redirect to the admin page
        router.push("/admin");
      } else if (user?.publicMetadata?.role) {
        // Redirect to user-specific page (e.g., buyer or seller)
        router.push(`/${user.publicMetadata.role}`);
      }
    }
  }, [isLoaded, isSignedIn, user, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-lamaSkyLight">
      <div className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold flex items-center justify-center gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          Daffodil Institute of IT
        </h1>
        <h2 className="text-center text-lg text-gray-500">
          Sign In Into Your Account
        </h2>
        <SignIn />
      </div>
    </div>
  );
};

export default LoginPage;
