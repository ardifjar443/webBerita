import axios from "axios";

export const getBerita = async () => {
  const berita = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_BASE_URL_KEY
    }`
  );

  return berita.data.articles;
};
