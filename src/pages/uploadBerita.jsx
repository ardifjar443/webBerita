import { useState } from "react";
import { UploadBerita, getLoading, getUploadLoading } from "../api";
import Notif from "../component/notif";
import { json } from "react-router-dom";
import { data } from "autoprefixer";

const Upload = () => {
  const [isNotif, setIsNotif] = useState(false);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    deskripsi: "",
    content: "",
    foto: null,
    foto1: null,
    foto2: null,
    foto3: null,
  });

  const [isiContent, setIsiContent] = useState([{ tipe: "paragraf" }]);

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

    formDatas.append("foto", formData.foto);
    const fileGambar = ["file", "gambar1", "gambar2", "gambar3"];

    let noGambar = 1;
    const dataAkhir = isiContent;
    for (let i = 0; i < dataAkhir.length; i++) {
      if (fileGambar.includes(dataAkhir[i].link)) {
        dataAkhir[i].link = "gambar" + noGambar;

        // setFormData({ ...formData, ["foto" + noGambar]: dataAkhir[i].file[0] });
        formDatas.append("foto" + noGambar, dataAkhir[i].file[0]);
        noGambar++;
      }
    }
    let akhirContent = "";
    for (let i = 0; i < dataAkhir.length; i++) {
      if (dataAkhir[i].tipe === "paragraf") {
        akhirContent = akhirContent + "<p>" + dataAkhir[i].text + "</p>";
      } else if (dataAkhir[i].file) {
      } else {
        akhirContent = akhirContent + "<img src='" + dataAkhir[i].link + "' />";
        dataAkhir[i].tipe = "gambarUrl";
      }
    }

    formDatas.append("dataArray", JSON.stringify({ dataAkhir }));

    console.log(dataAkhir);
    for (const [key, value] of formDatas.entries()) {
      console.log(`${key}: ${value}`);
    }
    const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([key, value]) => value !== null)
    );
    console.log(formData);
    UploadBerita(formDatas).then((result) => {
      setText(result);
    });
    setIsNotif(true);
    setFormData({
      author: "",
      title: "",
      deskripsi: "",
      content: "",
      foto: null,
      foto1: null,
      foto2: null,
      foto3: null,
    });
    setIsiContent([{ tipe: "paragraf", text: "" }]);
  };

  console.log(isiContent);
  const tambahContent = () => {
    setIsiContent([...isiContent, { tipe: "paragraf" }]);
  };
  const tambahGambar = () => {
    const count = isiContent.filter((item) => item.tipe === "gambar");
    if (count.length < 3) {
      setIsiContent([...isiContent, { tipe: "gambar" }]);
    } else {
      setText("gambar tidak bisa lebih dari 3");
      setIsNotif(true);
    }
  };

  const gantiIsiContent = (i, isi) => {
    const arraySementara = [...isiContent];

    arraySementara[i].text = isi;
    setIsiContent(arraySementara);
  };

  const deleteContent = (index) => {
    const updatedArray = isiContent.filter((_, i) => i !== index);
    setIsiContent(updatedArray);
  };

  const gantiGambar = (index, url, file) => {
    const arraySementara = [...isiContent];

    if (url === "file") {
      const count = isiContent.filter((item) => item.tipe === "gambar");

      arraySementara[index].link = "file";
      arraySementara[index].file = file;
      setIsiContent(arraySementara);
    } else {
      arraySementara[index].link = url;
      setIsiContent(arraySementara);
    }
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
                  {isiContent.map((data, index) => (
                    <>
                      <div key={index} className="flex">
                        {data.tipe === "paragraf" ? (
                          <textarea
                            className="textarea textarea-bordered h-24 bg-primary border-spacing-4 border-base-100 w-full"
                            placeholder={`Type here ${index}`}
                            name="content"
                            value={data.text}
                            onChange={(e) => {
                              gantiIsiContent(index, e.target.value);
                            }}
                          ></textarea>
                        ) : (
                          <div className="flex" key={index}>
                            <input
                              type="file"
                              className="file-input  w-full  bg-primary text-info"
                              name="foto"
                              onChange={(e) => {
                                gantiGambar(index, "file", e.target.files);
                              }}
                              accept="image/*"
                            />
                            <div className="text-info p-3">atau</div>
                            <div>
                              <label> url Gambar {index}</label>
                              <input
                                type="text"
                                placeholder="url Gambar"
                                className="input input-bordered w-full bg-primary border-spacing-4 border-base-100 "
                                value={data.link}
                                onChange={(e) => {
                                  gantiGambar(index, e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        )}
                        <div className="flex">
                          <button
                            className="bg-info text-primary p-3 m-2 rounded-md hover:bg-primary hover:text-info "
                            onClick={() => {
                              deleteContent(index);
                            }}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </>
                  ))}

                  <div className="flex gap-2">
                    <button
                      className="bg-info text-primary hover:bg-primary hover:text-info w-full rounded-lg"
                      onClick={tambahContent}
                    >
                      + Paragraf
                    </button>
                    <button
                      className="bg-info text-primary hover:bg-primary hover:text-info w-full rounded-lg"
                      onClick={tambahGambar}
                    >
                      + Gambar
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
