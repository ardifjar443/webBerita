import axios from "axios";
import { useState } from "react";

let loading = true;

export const getBerita = async () => {
  const berita = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_BASE_URL_KEY
    }`
  );
  loading = false;
  return berita.data.articles;
};

export const getLoading = () => {
  return loading;
};
