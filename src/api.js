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

    if (berita.headers["content-type"].includes("text/html")) {
      loading = false;
      return { type: "html", data: berita.data };
    } else if (berita.headers["content-type"].includes("application/json")) {
      loading = false;
      return { type: "json", data: berita.data };
    } else if (
      berita.headers["content-type"].includes("text/plain; charset=utf-8")
    ) {
      if (berita.data === "") {
        return { type: "json", data: "tidak ada data" };
      }
      loading = false;
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
  if (berita.data.filter((item) => item.id.includes(id))[0] === undefined) {
    return "tidak ada article";
  }

  return berita.data.filter((item) => item.id.includes(id))[0];
};

export const setNegara = (id) => {
  console.log("berubvah");
  endPoint = "/top-headlines?country=" + id;
};

export const UploadBerita = async (form) => {
  upload = true;
  console.log(form);

  try {
    const uploads = await axios.post(`http://localhost:8000/api/berita`, form);
    upload = false;
    console.log(uploads);
    return "Berhasil Menambahkan Berita!!";
  } catch (error) {
    upload = false;
    console.log(error);
    if (error.message === "Network Error") {
      return "Anda tidak berada di Server";
    } else if (error.response.data) {
      return error.response.data;
    } else {
      return error.response.data.error;
    }
  }
};
