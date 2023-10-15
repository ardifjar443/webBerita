export const register = async (form) => {
  const user = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/api/register`,
    form
  );

  console.log(user);
};
