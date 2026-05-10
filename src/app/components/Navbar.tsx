"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Links = [
    {href: "/about", text: "About"},
    {href: "/whatdowedo", text: "What do we do?"},
    {href: "/reviews", text: "Reviews"},
]

export const NavBar = () => {
  const { data: session } = useSession();
  return (
    <nav className="bg-base-300 border-b border-base-200">
      <div className="navbar max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold text-blue-500 dark:text-sky-400">
            Home
          </Link>
        </div>

        <ul className="flex-1 flex justify-center gap-8">
          {Links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="capitalize text-blue-500 dark:text-sky-400 hover:text-blue-600">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex items-center justify-end gap-4">
          <Link href="/signup" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Sign Up
          </Link>
          {session ? (
            <>
              <button
                type="button"
                onClick={() => signOut()}
                className="bg-white text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-50"
              >
                Sign Out
              </button>
              <Link href="/profile" className="rounded-full overflow-hidden border border-blue-300 hover:border-blue-500">
                <Image src={session?.user?.image ?? "/images/defaultuser.jpg"} alt="Profile" width={40} height={40} className="rounded-full" />
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => signIn()}
                className="bg-white text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-50"
              >
                Sign In
              </button>
              <Image src="/public/defaultuser.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};