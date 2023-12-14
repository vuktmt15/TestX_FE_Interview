"use client";

/**
 * It is private page, if you want to access, you should logged in Google
 */

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/");
    },
  });

  return (
    <div className="bg-[url('/background.png')] min-h-screen bg-cover pt-[168px] pb-[70px] flex flex-col justify-center items-center">
      <h2 className="text-[48px] text-black">This is Page 2</h2>
      <p className="text-[36px]">
        If you want to Log Out, click{" "}
        <span
          className="cursor-pointer text-[#316fb3]"
          onClick={() => signOut()}
        >
          here
        </span>
      </p>
      <p className="text-[36px]">
        If you want to Authentication Page, click{" "}
        <span
          className="cursor-pointer text-[#316fb3]"
          onClick={() => router.push("/")}
        >
          here
        </span>
      </p>
    </div>
  );
}
