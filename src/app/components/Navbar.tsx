import Link from "next/link";

const Links = [
    {href: "/about", text: "About"},
    {href: "/whatdowedo", text: "What do we do"},
    {href: "/reviews", text: "Reviews"},
]

export const NavBar = () => {
  return (
    <nav className="bg-base-300">
      <div className="navbar max-w-6xl mx-auto flex items-center justify-between font-sans">
        <Link href="/" className="text-blue-500 dark:text-sky-400/100">
          Home
        </Link>

        <div className="navbar-center flex-1">
    <ul className="flex w-full justify-evenly">
      {Links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="capitalize text-blue-500 dark:text-sky-400/100">
            {link.text}
          </Link>
        </li>
      ))}
        <button className="bg-blue-500 hover:bg-blue-400 text-white-500 dark:text-sky-400/100 font-bold py-2 px-4 border-b-4 justify-evenlyborder-blue-700 hover:border-blue-500 rounded">Sign Up</button>
    </ul>
  </div>
      </div>
    </nav>
  );
};