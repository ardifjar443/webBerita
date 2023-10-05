import axios from "axios";

let loading = true;

let endPoint = "/top-headlines?country=us";
export const getBerita = async () => {
  console.log("berita:" + endPoint);
  const berita = await axios.get(
    `${import.meta.env.VITE_BASE_URL}${endPoint}&apiKey=${
      import.meta.env.VITE_BASE_URL_KEY
    }`
  );
  loading = false;

  if (berita.data.totalResults === 0) {
    return "Tidak ada Data";
  }

  return berita.data.articles;
};

export const setSearch = (id) => {
  endPoint = "/everything?q=" + id;
};

export const getLoading = () => {
  return loading;
};

export const article = async (id) => {
  // console.log("article: " + endPoint);
  const berita = await axios.get(
    `${import.meta.env.VITE_BASE_URL}${endPoint}&apiKey=${
      import.meta.env.VITE_BASE_URL_KEY
    }`
  );
  loading = false;
  for (let i = 0; i < berita.data.articles.length; i++) {
    let data = berita.data.articles[i];
    // console.log(i + "." + data.title.split(" ").slice(0, 8).join("-"));
    if (data.title.split(" ").slice(0, 8).join("-") === id) {
      // console.log("berhasil");
      return data;
    }
  }
  // console.log("gagal");
  // console.log("cari: " + id);

  return "gagal";
};

export const setNegara = (id) => {
  console.log("berubvah");
  endPoint = "/top-headlines?country=" + id;
};
