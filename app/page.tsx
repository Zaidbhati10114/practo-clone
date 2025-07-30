"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { CiLocationOn } from "react-icons/ci";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  const [location, setLocation] = useState("Bangalore");
  const [specialization, setSpecialization] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(
      `/doctors?location=${location.trim()}&specialization=${specialization.trim()}`
    );
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-brandBlue flex-1 text-center flex flex-col justify-center items-center relative overflow-hidden px-4 md:px-8">
        {/* Floating icons */}
        {/* <Image
          src="/icons/cloud.svg"
          alt="cloud"
          width={40}
          height={40}
          className="absolute top-6 left-4 md:top-10 md:left-20"
        /> */}
        {/* <Image
          src="/icons/balloons.svg"
          alt="balloons"
          width={40}
          height={40}
          className="absolute top-20 right-4 md:top-28 md:right-16"
        /> */}

        <h1 className="text-white text-xl md:text-3xl font-semibold mb-2 md:mb-4">
          Your home for health
        </h1>
        <h1 className="text-white text-lg md:text-2xl mt-2 mb-1">
          Find and Book
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch bg-white rounded-md shadow-md overflow-hidden w-full max-w-xl mt-4">
          <div className="flex items-center gap-2 px-3 border-b md:border-b-0 md:border-r w-full md:w-1/3">
            <CiLocationOn className="text-gray-500 text-xl" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="py-3 text-sm w-full outline-none placeholder-gray-500"
              placeholder="Enter location (e.g. Bangalore)"
            />
          </div>

          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="px-4 py-3 text-sm w-full outline-none placeholder-gray-500"
            placeholder="Enter specialization (e.g. Dermatologist)"
          />

          <button
            onClick={handleSearch}
            className="bg-brandBlueLight text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Popular searches */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-white text-xs md:text-sm mt-4 px-2">
          <span>Popular searches:</span>
          <span className="underline cursor-pointer">Dermatologist</span>
          <span className="underline cursor-pointer">Pediatrician</span>
          <span className="underline cursor-pointer">Gynecologist</span>
          <span className="underline cursor-pointer">Others</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
