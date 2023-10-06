import axios from "axios";

let loading = true;

let endPoint = "/top-headlines?country=us";
export const getBerita = async () => {
  try {
    const berita = await axios.get(`${import.meta.env.VITE_BASE_URL}`);
    loading = false;

    console.log(berita.data.data);
    return berita.data;
  } catch (error) {
    // Tangani kesalahan di sini

    return error; // Atau Anda dapat mengembalikan nilai atau status kesalahan khusus
  }
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
    `${
      import.meta.env.VITE_BASE_URL
    }?query=select * from yAs1kypTkYL4b5rn where id='${id}'`
  );
  console.log(berita.data.data[0]);
  loading = false;

  // console.log("gagal");
  // console.log("cari: " + id);

  return berita.data.data[0];
};

export const setNegara = (id) => {
  console.log("berubvah");
  endPoint = "/top-headlines?country=" + id;
};
