import React, { useState } from "react";
import "../components/Main.css";
import { fetchpesticides } from "./services/api";

export default function Pesticide() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [options2, setOptions2] = useState([]);
  const [pesticidesData, setPesticides] = useState([]);

  const handleDropdown1Change = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption1(selectedValue);

    // Define options based on selected crop
    const cropOptions = {
      Rice: ["Blast", "Sheath Blight"],
      Wheat: ["Rust", "Fusarium Head Blight"],
      Sugarcane: ["Red Rot", "Smut"],
      Cotton: ["Fusarium Wilt", "Verticillium Wilt"],
      // Jute: ["Anthracnose", "Stem Rot"],
      // Corn: ["Corn Smut", "Leaf Blight"],
      Barley: ["Leaf Rust", "Powdery Mildew"],
      Soyabean: ["Soybean Rust", "Stem Canker"],
      Apple: ["Apple Scab", "Fire Blight"],
      Chickpea: ["Ascochyta Blight", "Fusarium Wilt"],
      Chilli: ["Anthracnose", "Powdery Mildew"],
      Cloves: ["Leaf Spot", "Dieback"],
      Coffee: ["Coffee Leaf Rust", "Coffee Berry Disease"],
      Ginger: ["Soft Rot", "Bacterial Wilt"],
      Groundnut: ["Leaf Spot", "Rust"],
      "Pearl Millet": ["Downy Mildew", "Ergot", "Rust", "Blast"], // Changed from PearlMillet to Pearl Millet
      Pepper: ["Phytophthora Blight", "Anthracnose"],
      Potato: ["Potato Wart", "Potato Virus Y"],
      Sesame: ["Alternaria Leaf Spot", "Charcoal Rot"],
      Sorghum: ["Anthracnose", "Head Smut"],
      Sunflower: ["Rust", "Downy Mildew"],
      Tea: ["Blister Blight", "Brown Blight"],
      Tobacco: ["Tobacco Mosaic Virus", "Black Shank"],
    };

    // Set options for the second dropdown based on selected crop
    setOptions2(cropOptions[selectedValue] || []);
    setSelectedOption2(""); // Reset the selected disease name when crop changes
  };

  const handleDropdown2Change = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption2(selectedValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchpesticides({
        Crop_name: selectedOption1,
        Disease_name: selectedOption2,
      });
      setPesticides(data);
      console.log(data);
    } catch (error) {
      console.log("Error fetching pesticides:", error);
    }
  };

  return (
    <div className="pesticide1">
      <div className="pestilist">
        <form onSubmit={handleSubmit} className="form-11">
          <label htmlFor="cropName">Crop Name</label>
          <select
            id="cropName"
            value={selectedOption1}
            onChange={handleDropdown1Change}
          >
            <option value="">Select Crop Name</option>
            <option value="Rice">Rice</option>
            <option value="Wheat">Wheat</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Cotton">Cotton</option>
            {/* <option value="Jute">Jute</option>
            <option value="Corn">Corn</option> */}
            <option value="Barley">Barley</option>
            <option value="Soyabean">Soyabean</option>
            <option value="Apple">Apple</option>
            <option value="Chickpea">Chickpea</option>
            <option value="Chilli">Chilli</option>
            <option value="Cloves">Cloves</option>
            <option value="Coffee">Coffee</option>
            <option value="Ginger">Ginger</option>
            <option value="Groundnut">Groundnut</option>
            <option value="Pearl Millet">Pearl Millet</option>
            <option value="Pepper">Pepper</option>
            <option value="Potato">Potato</option>
            <option value="Sesame">Sesame</option>
            <option value="Sorghum">Sorghum</option>
            <option value="Sunflower">Sunflower</option>
            <option value="Tea">Tea</option>
            <option value="Tobacco">Tobacco</option>
          </select>

          {/* Second dropdown for disease name */}
          <label htmlFor="diseaseName">Disease Name</label>
          <select
            id="diseaseName"
            value={selectedOption2}
            onChange={handleDropdown2Change}
          >
            <option value="">Select Disease Name</option>
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
      {pesticidesData.pesticides && (
        <table id="customers">
          <thead>
            <tr>
              <th>Pesticide id</th>
              <th>Pesticide name</th>
              <th>Diseas Name</th>
              <th>Crop Name</th>
              <th>Application rate</th>
              <th>Target Pest</th>

              <th>Safety caution</th>
              <th>Disease id</th>
            </tr>
          </thead>
          <tbody>
            {pesticidesData.pesticides.map((data, index) => (
              <tr key={index}>
                <td>{data.Pesticide_id}</td>
                <td>{data.Pesticide_name}</td>
                <td>{data.Disease_name}</td>
                <td>{data.Crop_name}</td>
                <td>{data.App_rate}</td>
                <td>{data.Target_pest}</td>

                <td>{data.Safety_caution}</td>
                <td>{data.Disease_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
