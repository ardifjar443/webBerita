import { Link, useParams, useNavigate } from "react-router-dom";
import { article, setNegara } from "../api";
import { useEffect, useState } from "react";

const Article = (props) => {
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("q");

  const history = useNavigate();
  const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  const [title, setTitle] = useState("");
  const [publis, setPublis] = useState("");
  const [source, setSource] = useState("");
  const [img, setImg] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [content, setContent] = useState("");
  const [gambar1, setGambar1] = useState("");
  const [gambar2, setGambar2] = useState("");
  const [gambar3, setGambar3] = useState("");

  useEffect(() => {
    article(id).then((result) => {
      if (result !== "tidak ada article") {
        if (search) {
          console.log("searching jalan", search);
          const title = result.title.split(" ");

          const titleAkhir = title.map((data) => {
            if (data.toLowerCase().includes(search.toLowerCase())) {
              return `<span class="text-amber-500">${data}</span>`;
            } else {
              return data;
            }
          });
          setTitle(titleAkhir.join(" "));
          setPublis(result.updated_at);
          setSource(result.author);
          setImg(result.foto);
          const deskripsi = result.deskripsi.split(" ");

          const deskripsiAkhir = deskripsi.map((data) => {
            if (data.toLowerCase().includes(search.toLowerCase())) {
              return `<span class="text-amber-500">${data}</span>`;
            } else {
              return data;
            }
          });
          setDeskripsi(deskripsiAkhir.join(" "));

          // const content = result.content.split(" ");

          // const contentAkhir = content.map((data) => {
          //   if (data.toLowerCase().includes(search.toLowerCase())) {
          //     return `<span class="text-amber-500">${data}</span>`;
          //   } else {
          //     return data;
          //   }
          // });
          // setContent(contentAkhir.join(" "));
          setContent(result.content);
          const contentElement = document.getElementById("content");
          let contentAkhir = [];
          contentElement.querySelectorAll("*").forEach((data) => {
            if (data.nodeName === "P") {
              const contentText = data.textContent.split(" ");
              const contentTextAkhir = contentText.map((item) => {
                if (item.toLowerCase().includes(search.toLowerCase())) {
                  return `<span class="text-amber-200">${item}</span>`;
                } else {
                  return item;
                }
              });
              contentAkhir.push("<p>" + contentTextAkhir.join(" ") + "</p>");
            } else {
              contentAkhir.push("<img src='" + data.src + "' />");
            }
          });

          setContent(contentAkhir.join(" "));

          setGambar1(result.foto1);
          setGambar2(result.foto2);
          setGambar3(result.foto3);
        } else {
          setTitle(result.title);
          setPublis(result.updated_at);
          setSource(result.author);
          setImg(result.foto);
          setDeskripsi(result.deskripsi);
          setContent(result.content);
          // Ubah data blob ke tipe Uint8Array
          setGambar1(result.foto1);
          setGambar2(result.foto2);
          setGambar3(result.foto3);
        }
      } else {
        console.log("gagal");
        history("/error");
      }
    });
  }, [search]);

  return (
    <>
      {title !== "" ? (
        <>
          <div className=" min-h-screen flex items-center justify-center  ">
            <div className=" w-full mx-10 mt-24 ">
              <div>
                <h1 className=" text-xl font-bold">
                  <span
                    className=""
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </h1>
                <p className="text-lg">{publis}</p>
                <p>source: {source}</p>
              </div>
              <div className="w-full flex  justify-center mt-10 ">
                <div className=" flex flex-col gap-4">
                  <div className="flex justify-center">
                    <img
                      src={import.meta.env.VITE_BASE_URL + img}
                      alt="image"
                      className="w-3/4"
                    />
                  </div>

                  <span>
                    <span
                      className=""
                      dangerouslySetInnerHTML={{ __html: deskripsi }}
                    />
                  </span>

                  <div
                    className="flex flex-col gap-6"
                    dangerouslySetInnerHTML={{ __html: content }}
                    id="content"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen flex items-center justify-center ">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      )}
      <div className="flex justify-center p-20 ">
        <Link
          to={`/`}
          onClick={() => {
            scrollToTop();
          }}
          className="bg-primary text-info hover:bg-info hover:text-primary p-3 text-xl rounded-lg"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default Article;
