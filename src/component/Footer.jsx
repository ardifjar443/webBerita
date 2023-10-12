import React from "react";
import "./style/Footer.css";

const Footer = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-base-100" style={{ transition: "1s" }}>
        <footer
          className="footer rounded-t-3xl flex justify-center bg-primary"
          style={{ transition: "1s" }}
        >
          <div className="container">
            <br />
            <div className="row  w-full ">
              <div className="col-md mb-5">
                <div className="footer-col ">
                  <h4 className="text-info">Quotes</h4>
                  <p className="text-success">
                    "Mulai setiap harimu dengan pikiran positif dan hati yang
                    bersyukur." - Roy T. Bennett."
                  </p>
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="footer-col text-info">
                  <h4>follow us</h4>
                  <div className="social-links text-white">
                    <a
                      href="https://www.instagram.com/ardi_fj_ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#ff8906] hover:bg-[#c6781f]  "
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.kaggle.com/ardifajararifin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#ff8906] hover:bg-[#c6781f]  "
                    >
                      <i className="fab fa-kaggle"></i>
                    </a>
                    <a
                      href="https://github.com/ardifjar443"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#ff8906] hover:bg-[#c6781f]  "
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ardi-fajar-arifin/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#ff8906] hover:bg-[#c6781f]  "
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <footer className="text-center pb-1 pt-3 text-light rounded-top-5 bg-[#ff8906] text-white ">
        <p>
          Create with <i className="bi bi-heart-fill"></i> by{" "}
          <a
            href="https://www.instagram.com/ardi_fj_ar/"
            className=" hover:bg-gray-500 rounded-full py-2 px-1 fw-bold "
            style={{ textDecoration: "none" }}
          >
            Ardi Fajar Arifin
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
