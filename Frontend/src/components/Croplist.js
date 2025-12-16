import React, { useState } from "react";
import { fetchcrops } from "./services/api";
import "../components/Main.css";

export default function CropList() {
  const [selectedSoilType, setSelectedSoilType] = useState("");
  const [cropsData, setCrops] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchcrops({
        Soil_type: selectedSoilType,
      });
      if (data) {
        setCrops(data);
      }
      console.log(data);
    } catch (error) {
      console.log("Error fetching crops:", error);
    }
  };

  const handleSoilTypeChange = (event) => {
    setSelectedSoilType(event.target.value);
  };

  return (
    <div className="croplist1">
      <div className="crop_list">
        <form onSubmit={handleSubmit} className="form-11">
          <label htmlFor="soilType">Soil Type</label>
          <select
            id="soilType"
            value={selectedSoilType}
            onChange={handleSoilTypeChange}
            className="soil-select"
          >
            <option value="">Select Soil</option>
            <option value="Alluvial Soil">Alluvial Soil</option>
            <option value="Black Soil">Black Soil</option>
            <option value="Red Soil">Red Soil</option>
            <option value="Mountain Soil">Mountain Soil</option>
          </select>
          <button type="submit" disabled={selectedSoilType === ""}>
            Get List
          </button>
        </form>
      </div>
      {cropsData.crops && (
        <table id="customers">
          <thead>
            <tr>
              <th>Crop name</th>
              <th>Sowing Season</th>
              <th>Duration of crop</th>
              <th>Harvesting Season</th>
            </tr>
          </thead>
          <tbody>
            {cropsData.crops.map((data, index) => (
              <tr key={index}>
                <td>{data.Crop_name}</td>
                <td>{data.Sowing_Season}</td>
                <td>{data.Duration_of_crop}</td>
                <td>{data.Harvesting_Season}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
