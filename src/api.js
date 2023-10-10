import axios from "axios";

let loading = true;
let upload = false;
let pesan = "berhasil";

let endPoint = "/top-headlines?country=us";
export const getBerita = async () => {
  try {
    const berita = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/data/data.json`
    );
    loading = false;
    console.log(berita.headers["content-type"]);
    if (berita.headers["content-type"].includes("text/html")) {
      return { type: "html", data: berita.data };
    } else if (berita.headers["content-type"].includes("application/json")) {
      return { type: "json", data: berita.data };
    } else if (
      berita.headers["content-type"].includes("text/plain; charset=utf-8")
    ) {
      return { type: "json", data: berita.data };
    } else {
      return "tidak ada data";
    }
  } catch (error) {
    // Tangani kesalahan di sini
    console.log(error);

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
    `${import.meta.env.VITE_BASE_URL}/data/data.json`
  );

  loading = false;

  return berita.data.filter((item) => item.id.includes(id))[0];
};

export const setNegara = (id) => {
  console.log("berubvah");
  endPoint = "/top-headlines?country=" + id;
};

export const UploadBerita = async (form) => {
  upload = true;

  try {
    const uploads = await axios.post(`http://localhost:8000/api/berita`, form);
    upload = false;

    return "Berhasil Menambahkan Berita!!";
  } catch (error) {
    upload = false;
    console.log(error);
    if (error.message === "Network Error") {
      return "Anda tidak berada di Server";
    } else if (error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.response.data.error;
    }
  }
};
