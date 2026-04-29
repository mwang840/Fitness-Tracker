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
    </ul>
  </div>
      </div>
    </nav>
  );
};