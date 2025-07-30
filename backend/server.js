import express from "express";
import cors from "cors";
import doctors from "./doctors.json" with { type: "json" };

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/doctors", (req, res) => {
  const { location = "", specialization = "" } = req.query;
  const filtered = doctors.filter((doc) => {
    return (
      doc.location.toLowerCase().includes(location.toLowerCase()) &&
      (specialization === "" ||
        doc.specialization.toLowerCase().includes(specialization.toLowerCase()))
    );
  });
  res.json(filtered);
});



app.listen(4000, () => console.log("🔥 API running on port 4000"));
