import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7143/api",
});
const getAuthTokenFromLocalStorage = () => {
  return localStorage.getItem("jwtToken");
};
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
const getVehicles = async () => {
  try {
    const response = await api.get("/Vehicles");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const createVehicle = async (vehicleData) => {
  try {
    const response = await api.post("/Vehicles", vehicleData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  getAuthTokenFromLocalStorage,
  setAuthToken,
  getVehicles,
  createVehicle,
};
