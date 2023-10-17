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

export const login = async (form) => {
  try {
    const user = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
      form
    );
    console.log(user);
    return user.statusText;
  } catch (error) {
    console.log(error);
    return error.response.statusText;
  }
};
