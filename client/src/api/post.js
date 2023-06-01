import axios from "axios";

const baseURL = "http://localhost:5000";

export const newPostApi = async (data) => {
  try {
    console.log("newPostApi data:",data)
    const response = await axios.post(baseURL + "/createPost", data);

    console.log(response.data);
    return response;
  } catch (error) {
    console.error("api/post/createPost: " + error.response.data);
  }
};
