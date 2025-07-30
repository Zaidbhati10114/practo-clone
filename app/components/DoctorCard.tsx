type Props = {
  doctor: any;
};

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className="bg-white border rounded-md shadow-sm p-4 mb-4 flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-lg">{doctor.name}</h2>
        <p className="text-gray-600">{doctor.specialization}</p>
        <p className="text-sm">{doctor.experience} experience</p>
        <p className="text-sm text-gray-700">{doctor.location}</p>
        <p className="text-sm">₹{doctor.fees} Consultation Fees</p>
        <p className="text-sm text-green-600">
          {doctor.rating}% ({doctor.reviews} Patient Stories)
        </p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
        Book Clinic Visit
      </button>
    </div>
  );
}
