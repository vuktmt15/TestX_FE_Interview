"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-[calc(100%-32px)] w-[1136px] flex flex-wrap flex-col lg:flex-row items-center justify-between mx-auto pb-4 lg:pb-0">
        <Link
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src="/logo.svg" alt="TestX" width={260} height={0} />
        </Link>
        <div className="flex flex-wrap xl:gap-x-4 items-center justify-between bg-[#F7BDCC] px-3 py-2 md:py-0 rounded-xl md:w-[821px]">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {session && session.user ? (
              <div className="flex items-center ml-0">
                <button
                  type="button"
                  className="flex gap-2 items-center text-[#17344F] bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-[32px] text-sm h-[30px] px-10 md:py-2 text-center"
                >
                  <Image
                    src={`${session.user.image}`}
                    alt=""
                    width={27}
                    height={27}
                    className="rounded-full"
                  ></Image>
                  <span>{session.user.name}</span>
                </button>
              </div>
            ) : (
              <Link
                href={"https://petra.app/"}
                target="_blank"
                className="mx-auto flex items-center text-[#17344F] bg-white hover:opacity-[0.7] font-bold rounded-[32px] text-sm h-[30px] px-10 md:py-2 text-center"
              >
                Connect Wallet →
              </Link>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col py-1 mt-4 text-[#596F78] text-sm font-bold border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:px-5"
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:px-5 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Protocols
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:px-5 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Tokens
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:px-5 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Use Cases
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
