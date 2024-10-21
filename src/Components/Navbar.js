import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          to="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          Crypto Portfolio
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Supported Coins
          </Link>
          <Link
            to="/favrate"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            favrate
          </Link>
          <Link
            to="/contect"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}
