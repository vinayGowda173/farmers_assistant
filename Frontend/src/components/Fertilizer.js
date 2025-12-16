import React, { useState } from "react";
import "../components/Main.css";
import { fetchfertilizers } from "./services/api";

export default function Fertilizer() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [options2, setOptions2] = useState([]);
  const [fertilizersData, setFertilizers] = useState([]);

  const handleDropdown1Change = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption1(selectedValue);

    // Define options based on selected soil type
    const soilOptions = {
      Alluvial: [
        "Rice",
        "Wheat",
        "Sugarcane",
        "Cotton",
        "Jute",
        "Corn",
        "Barley",
      ],
      "Black Soil": [
        "Cotton",
        "Soyabean",
        "Sugarcane",
        "Groundnut",
        "Wheat",
        "Chickpea",
        "Sunflower",
        "Sorghum",
      ],
      "Red Soil": [
        "Groundnut",
        "Cotton",
        "Tobacco",
        "Chilli",
        "Red Lentils",
        "Sorghum",
        "Sugarcane",
        "Sesame",
        "Pearl Millet",
      ],
      "Mountain Soil": [
        "Tea",
        "Coffee",
        "Apple",
        "Potato",
        "Cloves",
        "Pepper",
        "Ginger",
      ],
    };

    // Set options for the second dropdown based on selected soil type
    setOptions2(soilOptions[selectedValue] || []);
    setSelectedOption2(""); // Reset the selected crop name when soil type changes
  };

  const handleDropdown2Change = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption2(selectedValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchfertilizers({
        Soil_type: selectedOption1,
        Crop_name: selectedOption2,
      });
      setFertilizers(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching fertilizers:", error);
    }
  };

  return (
    <div className="fertilizer1">
      <div className="fertilist">
        <form onSubmit={handleSubmit} className="form-11">
          <label htmlFor="soilType">Soil Type</label>
          <select
            id="soilType"
            value={selectedOption1}
            onChange={handleDropdown1Change}
          >
            <option value="">Select Soil Type</option>
            <option value="Alluvial">Alluvial Soil</option>
            <option value="Black Soil">Black Soil</option>
            <option value="Red Soil">Red Soil</option>
            <option value="Mountain Soil">Mountain Soil</option>
          </select>

          {/* Second dropdown for crop name */}
          <label htmlFor="cropName">Crop Name</label>
          <select
            id="cropName"
            value={selectedOption2}
            onChange={handleDropdown2Change}
          >
            <option value="">Select Crop Name</option>
            {options2.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button type="submit" disabled={selectedOption1 === ""}>
            Get List
          </button>
        </form>
      </div>
      {fertilizersData.fertilizers && (
        <table id="customers">
          <thead>
            <tr>
              <th>Fertilizer id</th>
              <th>Fertilizer name</th>
              <th>App rate</th>

              <th>Physical form</th>
              <th>Storage condition</th>
              <th>Safety caution</th>
              <th>Crop name</th>
              <th>Soil name</th>
            </tr>
          </thead>
          <tbody>
            {fertilizersData.fertilizers.map((data, index) => (
              <tr key={index}>
                <td>{data.Fertilizer_id}</td>
                <td>{data.Fertilizer_name}</td>
                <td>{data.App_rate}</td>

                <td>{data.Physical_form}</td>
                <td>{data.Storage_condition}</td>
                <td>{data.Safety_caution}</td>
                <td>{data.Crop_name}</td>
                <td>{data.Soil_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
