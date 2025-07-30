import {
  FaUserMd,
  FaPills,
  FaFileMedical,
  FaFlask,
  FaBookMedical,
  FaHospital,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brandBlue text-white py-4 px-6 grid grid-cols-2 md:flex md:justify-around text-xs md:text-sm gap-4 md:gap-0">
      <span className="flex flex-col items-center gap-1 text-center">
        <FaUserMd size={18} />
        <span>Consult with a doctor</span>
      </span>

      <span className="flex flex-col items-center gap-1 text-center">
        <FaPills size={18} />
        <span>Order Medicines</span>
      </span>

      <span className="flex flex-col items-center gap-1 text-center">
        <FaFileMedical size={18} />
        <span>View medical records</span>
      </span>

      <span className="flex flex-col items-center gap-1 text-center">
        <FaFlask size={18} />
        <span>Book test</span>
      </span>

      <span className="flex flex-col items-center gap-1 text-center">
        <FaBookMedical size={18} />
        <span>Read articles</span>
      </span>

      <span className="flex flex-col items-center gap-1 text-center">
        <FaHospital size={18} />
        <span>For healthcare providers</span>
      </span>
    </footer>
  );
}
