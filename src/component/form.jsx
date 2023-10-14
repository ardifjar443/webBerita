import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    setLoading(true);
    const form = new FormData();
    form.append("nama", formData.nama);
    form.append("email", formData.email);
    form.append("pesan", formData.pesan);
    try {
      const kirim = axios
        .post(
          "https://script.google.com/macros/s/AKfycbwaCi0prWnW8qFTYjbgD9-8JzDBuPk2mWWGsPYiWAjrh1XsOFVd_2NaDORwXwtD0AGa/exec",
          form
        )
        .then((response) => {
          console.log(response);
          setSukses(true);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {loading ? (
        <>
          {" "}
          <span className="loading loading-dots loading-lg"></span>
          <span>Tunggu Sebentar</span>
        </>
      ) : sukses ? (
        <>
          <p className="text-center text-primary">sukses mengirim form</p>
          <p className="text-center text-primary">
            terima kasih sudah mengirim masukan nya
          </p>
        </>
      ) : (
        <>
          <div>Mohon Untuk isi Form Ini</div>
          <div className="form-control w-full flex gap-3 mt-3 ">
            <input
              type="text"
              placeholder="Masukan Nama Anda"
              className="input input-ghost w-full "
              id="nama"
              aria-describedby="name"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Masukan Email Anda"
              className="input input-ghost w-full "
              id="email"
              aria-describedby="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="textarea"
              placeholder="Tuliskan Error yang anda Terima"
              id="pesan"
              rows="3"
              name="pesan"
              required
              value={formData.pesan}
              onChange={handleChange}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="bg-primary text-info hover:bg-info hover:text-primary p-1 rounded-lg"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
