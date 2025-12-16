import axios from "axios";

const baseURL = `http://localhost:3051/api/v1`;

export const fetchfertilizers = async (data) => {
  try {
    console.log(data.Crop_name);
    const response = await axios.get(
      `${baseURL}/fertilizers?Crop_name=${data.Crop_name}&Soil_type=${data.Soil_type}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchcrops = async (data) => {
  try {
    console.log(data.Crop_name);
    const response = await axios.get(
      `${baseURL}/crops?Soil_type=${data.Soil_type}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchdiseases = async (data) => {
  try {
    console.log(data.Crop_name);
    const response = await axios.get(
      `${baseURL}/diseases?Crop_name=${data.Crop_name}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchpesticides = async (data) => {
  try {
    console.log(data.Crop_name);
    console.log(data.Disease_name);

    const response = await axios.get(
      `${baseURL}/pesticides?Crop_name=${data.Crop_name}&Disease_name=${data.Disease_name}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
