"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthUI() {
  const { data: session } = useSession();

  return (
    <div>
      <h2 className="md:w-[585px] w-[calc(100%-16px)] md:max-w-none text-[69px] font-normal leading-[80px] tracking-[1.52px] text-left">
        Explore and Earn on
        <span className="inline-flex justify-center w-[135px] h-[92px] leading-[80px] ml-[36px] bg-[url('/logoBG.png')] bg-white bg-bottom bg-no-repeat">
          <span className="top-0 text-[51px] font-[800] text-black tracking-[-6px]">
            test<span className="text-[56px]">X</span>
          </span>
        </span>
      </h2>

      <form className="mt-[14px] w-[423px]">
        <div className="relative w-[423px]">
          <input
            type="search"
            className="block w-[423px] px-4 py-[10px] ps-10 text-sm text-gray-900 border border-[#F2F5FA] rounded-[32px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          />
          <button
            type="button"
            className="text-[#17344F] absolute end-[0.6rem] bottom-[0.35rem] bg-[#F5B4BB] hover:opacity-[0.7] focus:outline-none font-normal rounded-[32px] px-[30px] py-[3px]"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-between mt-[21px]">
          {session && session.user ? (
            <button
              type="button"
              className="w-[174px] text-white bg-[#cc4646] hover:opacity-[0.7] focus:outline-none font-bold rounded-[32px] px-4 py-[10px]"
              onClick={() => signOut()}
            >
              Log out
            </button>
          ) : (
            <button
              type="button"
              className="w-[174px] text-white bg-[#7BB8F1] hover:opacity-[0.7] focus:outline-none font-bold rounded-[32px] px-4 py-[8px]"
              onClick={() => signIn()}
            >
              Log in
            </button>
          )}
          <Link
            href={session && session.user ? "/home" : "/"}
            className="w-[203px] text-[#17344F] text-center bg-white hover:opacity-[0.7] font-bold rounded-[32px] px-4 py-[8px]"
          >
            Launch App
          </Link>
        </div>
      </form>
    </div>
  );
}
