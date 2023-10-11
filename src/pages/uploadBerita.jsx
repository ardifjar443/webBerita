import { useState } from "react";
import { UploadBerita, getLoading, getUploadLoading } from "../api";
import Notif from "../component/notif";

const Upload = () => {
  const [isNotif, setIsNotif] = useState(false);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    deskripsi: "",
    content: "",
    foto: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, foto: e.target.files[0] });
  };

  const handleSubmit = () => {
    setText(<span className="loading loading-spinner loading-lg"></span>);
    const formDatas = new FormData();
    formDatas.append("author", formData.author);
    formDatas.append("title", formData.title);
    formDatas.append("deskripsi", formData.deskripsi);
    formDatas.append("content", formData.content);
    formDatas.append("foto", formData.foto);

    UploadBerita(formDatas).then((result) => {
      setText(result);
    });
    setIsNotif(true);
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center  ">
        <div className="bg-primary text-info p-3 rounded-lg shadow-md w-3/4 flex flex-col mt-24 mb-10 ">
          <div>Upload Berita</div>
          <div className="">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-info">
                  Author?<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-primary border-spacing-4 border-base-100 "
                name="author"
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="m-5">
              <label className="label">
                <span>
                  {" "}
                  Pilih gambar header<span className="text-red-500">
                    *
                  </span>{" "}
                </span>
              </label>
              <input
                type="file"
                className="file-input  w-full  bg-primary text-info"
                name="foto"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info">
                  Title? <span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 bg-primary border-spacing-4 border-base-100"
                placeholder="Type here"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info">deskripsi? </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 bg-primary border-spacing-4 border-base-100"
                placeholder="Type here"
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-control m-2 ">
              <div className="flex ">
                {" "}
                <label className="label">
                  <span className="label-text text-info">Content? </span>
                </label>
                <div className="w-full flex flex-col gap-3">
                  <textarea
                    className="textarea textarea-bordered h-24 bg-primary border-spacing-4 border-base-100 w-full"
                    placeholder="Type here"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                  ></textarea>
                  <textarea
                    className="textarea textarea-bordered h-24 bg-primary border-spacing-4 border-base-100 w-full"
                    placeholder="Type here"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                  ></textarea>
                  <div>
                    <button className="bg-info text-primary hover:bg-primary hover:text-info w-full rounded-lg">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#ff8906] hover:bg-[#c6781f] w-full p-2 rounded-lg text-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      {isNotif && <Notif setIsNotif={setIsNotif} text={text} />}
    </>
  );
};

export default Upload;
