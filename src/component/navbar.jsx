import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Notif from "./notif";
import SearchEngine from "./search";
import { logout } from "../user";
import { AuthContext } from "./AuthContext";

const Navbar = (props) => {
  const [displayStyle, setDisplayStyle] = useState("block");
  const [displayStyle2, setDisplayStyle2] = useState("");
  const [isNotif, setIsNotif] = useState(false);
  const [cari1, setCari1] = useState(false);
  const [text, setText] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (props.isVisible) {
      setDisplayStyle2("form-control animate__animated  animate__bounceOut");
      const timeout = setTimeout(() => {
        setDisplayStyle("hidden");
        setDisplayStyle2("form-control animate__animated  animate__bounceIn");
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setDisplayStyle2("form-control animate__animated  animate__bounceOut");
      setTimeout(() => {
        setDisplayStyle("form-control animate__animated  animate__bounceIn");
        setDisplayStyle2("form-control animate__animated  animate__bounceIn ");
      }, 1000);
    }
  }, [props.isVisible]);

  const cari = (
    <>
      <div className="flex flex-col items-center">
        <p>Maaf saat ini pencarian masih belum tersedia</p>
        <p className="font-bold">masih dalam tahap development</p>
      </div>
    </>
  );

  return (
    <>
      <div
        className="navbar bg-primary shadow-md rounded-b-3xl "
        style={{ transition: "1s" }}
      >
        <div className="flex items-start p-2 titleWeb ">
          <Link className="btn btn-ghost normal-case text-xl text-info" to="/">
            ArdiFjar443
          </Link>
        </div>
        <div className=" w-full justify-end gap-2 ">
          {!props.isVisible ? (
            <>
              {/* <div className={displayStyle2}>
                <input
                  type="text"
                  className="input input-bordered w-24 md:w-auto"
                  value={cari}
                  onChange={(e) => {
                    setCari(e.target.value);
                  }}
                  onClick={() => {
                    if (cari === "Search") {
                      setCari("");
                    }
                  }}
                  onMouseLeave={() => {
                    if (cari === "") {
                      setCari("Search");
                    }
                  }}
                />
              </div> */}
              <div className={displayStyle2}>
                <button
                  className="btn text-info hover:text-primary-focus bg-primary hover:bg-info"
                  // href={`/search/${cari}`}
                  onClick={() => {
                    setCari1(true);
                    setIsNotif(true);
                  }}
                >
                  <svg
                    className="w-5 h-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <circle cx="11" cy="11" r="8" />{" "}
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
              <div className={displayStyle}>
                <button
                  className="  text-info hover:text-primary-focus bg-primary p-3 hover:bg-info rounded-full w-10 h-10 flex items-center"
                  onClick={() => {
                    if (props.tema === "myLight") {
                      props.setItema(props.iconLight + "animate__rotateOut");
                      setTimeout(() => {
                        props.setItema(props.iconDark + "animate__rotateIn");
                        props.setTema("myDark");
                      }, 100);
                    } else {
                      props.setItema(props.iconDark + "animate__rotateOut");
                      setTimeout(() => {
                        props.setItema(props.iconLight + "animate__rotateIn");
                        props.setTema("myLight");
                      }, 100);
                    }
                  }}
                >
                  <i className={`animate__animated ${props.itema}`}></i>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* <div className={displayStyle2}>
                <input
                  type="text"
                  className="input input-bordered w-24 md:w-auto"
                  value={cari}
                  onChange={(e) => {
                    setCari(e.target.value);
                  }}
                  onClick={() => {
                    if (cari === "Search") {
                      setCari("");
                    }
                  }}
                  onMouseLeave={() => {
                    if (cari === "") {
                      setCari("Search");
                    }
                  }}
                />
              </div> */}
              <div className={displayStyle2}>
                <button
                  className="btn text-info hover:text-primary-focus bg-primary hover:bg-info"
                  onClick={() => {
                    setIsNotif(true);
                  }}
                >
                  <svg
                    className="w-5 h-5 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <circle cx="11" cy="11" r="8" />{" "}
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>

              <div
                className={`form-control animate__animated  animate__bounceOut ${displayStyle}`}
              >
                <button
                  className="  text-info hover:text-primary-focus bg-primary p-3 hover:bg-info rounded-full w-10 h-10 flex items-center"
                  onClick={() => {
                    if (props.tema === "myLight") {
                      props.setItema(props.iconLight + "animate__rotateOut");
                      setTimeout(() => {
                        props.setItema(props.iconDark + "animate__rotateIn");
                        props.setTema("myDark");
                      }, 100);
                    } else {
                      props.setItema(props.iconDark + "animate__rotateOut");
                      setTimeout(() => {
                        props.setItema(props.iconLight + "animate__rotateIn");
                        props.setTema("myLight");
                      }, 100);
                    }
                  }}
                >
                  <i className={`animate__animated ${props.itema}`}></i>
                </button>
              </div>
            </>
          )}
          {isNotif && (
            <Notif
              text={cari1 ? <SearchEngine setIsNotif={setIsNotif} /> : text}
              setIsNotif={setIsNotif}
              search={cari1}
            />
          )}
          {import.meta.env.MODE === "development" && (
            <div className="dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar bg-white"
              >
                <div className="w-10  "></div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                {isLoggedIn && (
                  <>
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <Link to={"/upload"}>Upload</Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setCari1(false);
                          setIsLoggedIn(false);
                          setIsNotif(true);
                          logout().then((response) => {
                            setText(response.data.message);
                          });
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                )}
                {!isLoggedIn && (
                  <>
                    <li>
                      <Link to="/login">Log in</Link>
                    </li>
                    <li>
                      <a>Register</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
