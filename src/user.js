import axios from "axios";

export const register = async (form) => {
  try {
    const user = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/register`,
      form
    );

    return "Register Berhasil";
  } catch (error) {
    return error.response.data;
  }

  console.log(user);
};
