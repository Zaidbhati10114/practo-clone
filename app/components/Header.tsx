"use client";
import { useState } from "react";
import { FaBookMedical } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-8 py-3 border-b bg-white">
      {/* Left section (logo + burger) */}
      <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
        {/* Logo & text together */}
        <div className="flex items-center gap-2">
          <FaBookMedical className="text-blue-600 text-xl" />
          <span className="text-lg font-semibold text-gray-800">Practo</span>
        </div>

        {/* Burger menu only on mobile */}
        <button
          className="md:hidden text-gray-700 text-xl ml-auto"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Nav links */}
      <nav
        className={`${
          open ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 md:gap-6 text-gray-700 font-medium text-sm w-full md:w-auto mt-3 md:mt-0`}
      >
        <a href="#">Find Doctors</a>
        <a href="#">Video Consult</a>
        <a href="#">Surgeries</a>
        <a href="#">For Corporates</a>
        <a href="#">For Providers</a>
        <a href="#">Security & Help</a>
      </nav>

      {/* Login / Signup always visible */}
      <div className="hidden md:block">
        <button className="border px-4 py-1 rounded-md text-blue-600 border-blue-600">
          Login / Signup
        </button>
      </div>

      {open && (
        <div className="block md:hidden w-full mt-2">
          <button className="w-full border px-4 py-2 rounded-md text-blue-600 border-blue-600">
            Login / Signup
          </button>
        </div>
      )}
    </header>
  );
}
