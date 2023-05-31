import axios from "axios";

const baseURL = "http://localhost:5000";

export const registerUserApi = async (data) => {
  try {
    const response = await axios.post(baseURL + "/register", data);

    console.log(response.data);
    return response;
  } catch (error) {
    console.error("api/auth/register: " + error.response.data);
  }
};

export const loginUserApi = async (data) => {
  try {
    const response = await axios.post(baseURL + "/login", data);
    console.log(response.data);
    return response;
    // Handle successful login response
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
    } else {
      console.log("An error occurred during login");
    }
  }
};
