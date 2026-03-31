"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import UserContext from "../context/usercontext";
import { logout } from "../service/service";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);


  const links = [
    { href: "/", label: "Home" },
    { href: "/pages/All-components", label: "Add Task" },
    { href: "../pages/showTasks", label: "show Task" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    try {
      const response = await logout();
      // console.log(response.data);
      context.setUser(undefined); // Clear the user context
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="bg-blue-600 h-16 flex items-center justify-between px-6 text-white font-semibold shadow-md">
      <div className="text-xl">
        <Link href="/">Work Managers</Link>
      </div>

      <button
        onClick={toggleMenu}
        className="text-2xl lg:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        &#9776;
      </button>

      <div className="hidden lg:flex space-x-8">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
        {context.user ? (
          <>
            <span className="cursor-pointer">{context.user.name || "No Name Available"}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/pages/login">Login</Link>
            <Link href="/pages/signup">Sign Up</Link>
          </>
        )}
      </div>

      <div
        className={`fixed inset-0 lg:hidden bg-gray-800 bg-opacity-75 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300`}
      >
        <div className="w-64 bg-blue-600 h-full p-4 relative">
          <button
            onClick={closeMenu}
            className="text-white text-3xl absolute top-4 right-4"
          >
            &times;
          </button>
          <ul className="space-y-6 mt-12">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            {context.user ? (
              <>
                <li>
                  <Link href="/profile">{context.user.name}</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/pages/login">Login</Link>
                </li>
                <li>
                  <Link href="/pages/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
