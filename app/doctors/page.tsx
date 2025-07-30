"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";

export default function DoctorsPage() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";
  const specialization = searchParams.get("specialization") || "";

  const [doctors, setDoctors] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/doctors?location=${location}&specialization=${specialization}`
      )
      .then((res) => setDoctors(res.data));
  }, [location, specialization]);

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Content wrapper */}
      <div className="flex-1 max-w-3xl mx-auto w-full p-4">
        <h1 className="text-lg font-semibold mb-4">
          {doctors.length} {specialization || "Doctors"} available in {location}
        </h1>
        {doctors.length === 0 && (
          <p className="text-gray-500 text-center">No doctors found</p>
        )}
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
