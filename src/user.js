import axios from "axios";
let token = "";
export const setToken = (t) => {
  token = t;
};
export const getToken = () => {
  return token;
};

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
    setToken(user.data.access_token);
    return user.statusText;
  } catch (error) {
    console.log(error);
    return error.response.statusText;
  }
};

export const me = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const user = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/me`,
      null,
      config
    );
    return user;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const user = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/auth/logout`,
      null,
      config
    );
    setToken("");

    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
