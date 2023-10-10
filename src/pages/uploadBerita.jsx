import { useState } from "react";
import { UploadBerita, getUploadLoading } from "../api";

const Upload = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [content, setContent] = useState("");
  const [foto, setFoto] = useState(null);

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDeskripsi = (e) => {
    setDeskripsi(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleFoto = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log(getUploadLoading());
    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    formData.append("deskripsi", deskripsi);
    formData.append("content", content);
    formData.append("foto", foto);

    console.log(UploadBerita(formData));
  };

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center ">
        <div className="bg-primary text-info p-3 rounded-lg shadow-md w-3/4 flex flex-col  ">
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
                value={author}
                onChange={handleAuthor}
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
                value={title}
                onChange={handleTitle}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info">deskripsi? </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 bg-primary border-spacing-4 border-base-100"
                placeholder="Type here"
                value={deskripsi}
                onChange={handleDeskripsi}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info">Content? </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 bg-primary border-spacing-4 border-base-100"
                placeholder="Type here"
                value={content}
                onChange={handleContent}
              ></textarea>
            </div>
            <div className="m-5">
              <input
                type="file"
                className="file-input  w-full  bg-primary text-info"
                onChange={handleFoto}
              />
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
    </>
  );
};

export default Upload;
