import React, { useState } from "react";
import { fetchdiseases } from "./services/api";
import "../components/Main.css";

export default function Disease() {
  const [selectedCropName, setSelectedCropName] = useState("");
  const [diseasesData, setDiseases] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchdiseases({
        Crop_name: selectedCropName,
      });
      if (data) {
        setDiseases(data);
      }
      console.log(data);
    } catch (error) {
      console.log("Error fetching diseases:", error);
    }
  };

  const handleChange = (event) => {
    setSelectedCropName(event.target.value);
  };

  return (
    <div className="disease1">
      <div className="dislist">
        <form onSubmit={handleSubmit} className="form-11">
          <label>Crop Name </label>
          <select value={selectedCropName} onChange={handleChange}>
            <option value="">Select Crop</option>
            <option value="Apple">Apple</option>
            <option value="Barley">Barley</option>
            <option value="Cotton">Cotton</option>
            <option value="Chickpea">Chickpea</option>
            <option value="Chilli">Chilli</option>
            <option value="Cloves">Cloves</option>
            <option value="Coffee">Coffee</option>
            <option value="Ginger">Ginger</option>
            <option value="Groundnut">Groundnut</option>
            <option value="Pearl Millet">Pearl Millet</option>
            <option value="Pepper">Pepper</option>
            <option value="Potato">Potato</option>
            <option value="Rice">Rice</option>
            <option value="Sesame">Sesame</option>
            <option value="Sorghum">Sorghum</option>
            <option value="Soyabean">Soyabean</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Sunflower">Sunflower</option>
            <option value="Tea">Tea</option>
            <option value="Tobacco">Tobacco</option>
            <option value="Wheat">Wheat</option>
          </select>
          <button type="submit" disabled={selectedCropName === ""}>
            Get List
          </button>
        </form>
      </div>
      {diseasesData.diseases && (
        <table id="customers">
          <thead>
            <tr>
              <th>Disease_id</th>
              <th>Disease_name</th>
              <th>Crop_name</th>
              <th>Symptom</th>
              <th>Transmission_mode</th>
              <th>Prevalence_season</th>
            </tr>
          </thead>
          <tbody>
            {diseasesData.diseases.map((data, index) => (
              <tr key={index}>
                <td>{data.Disease_id}</td>
                <td>{data.Disease_name}</td>
                <td>{data.Crop_name}</td>
                <td>{data.Symptom}</td>
                <td>{data.Transmission_mode}</td>
                <td>{data.Prevalence_season}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
