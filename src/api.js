import axios from "axios";

let loading = true;
let upload = false;
let pesan = "berhasil";

let endPoint = "/top-headlines?country=us";
export const getBerita = async () => {
  try {
    const berita = await axios.get(`${import.meta.env.VITE_BASE_URL}`);
    loading = false;

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

export const getUploadLoading = () => {
  return upload;
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

export const UploadBerita = async (form) => {
  upload = true;

  try {
    const upload = await axios.post("http://localhost:8000/api/berita", form);
    return upload;
  } catch (error) {
    console.log(error);
    return "error";
  }
};
