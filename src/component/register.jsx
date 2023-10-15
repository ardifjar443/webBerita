import { useEffect, useState } from "react";
import Notif from "./notif";
import { register } from "../user";
import { button } from "@material-tailwind/react";

const Register = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [validatePassword, setValidatePassword] = useState(<></>);
  const [validateEmail, setValidateEmail] = useState(<></>);
  const [isNotif, setIsNotif] = useState(false);
  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [keluar, setKeluar] = useState(false);
  const [validate, setValidate] = useState(false);
  const [hasil, setHasil] = useState(false);
  const [textHasil, setTextHasil] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState(true);
  const [moreError, setMoreError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showError1, setShowError1] = useState(false);
  const handleInputChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const validasiPassword = (e) => {
    if (e.target.value === dataForm.password) {
      setValidatePassword(<></>);
      setPassword(true);
    } else {
      setValidatePassword(
        <>
          <div className="bg-[#ff8906] text-center p-1 rounded-md text-primary">
            password tidak sama
          </div>
        </>
      );
      setPassword(false);
    }
  };
  const validasiEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      setValidateEmail(<></>);
    } else {
      setValidateEmail(
        <>
          <div className="bg-[#ff8906] text-center p-1 rounded-md text-primary">
            Masukan dengan dengan format yang benar
          </div>
        </>
      );
    }
  };

  const handleSubmit = () => {
    setShowPassword("password");
    if (dataForm.name === "") {
      setText("tolong masukan nama anda");
      setIsNotif(true);
    } else if (dataForm.email === "") {
      setText("tolong masukan email anda");
      setIsNotif(true);
    } else if (dataForm.password === "") {
      setText("tolong masukan password anda");
      setIsNotif(true);
    } else if (dataForm.password_confirmation === "") {
      setText("tolong masukan validasi password");
      setIsNotif(true);
    } else if (!password) {
      setText("tolong password harus sama ");
      setIsNotif(true);
    } else {
      setIsNotif(true);
      setValidate(true);
    }
  };
  const handleSubmitFinal = () => {
    const form = new FormData();
    form.append("name", dataForm.name);
    form.append("email", dataForm.email);
    form.append("password", dataForm.password);
    form.append("password_confirmation", dataForm.password_confirmation);
    register(form).then((response) => {
      if (response === "Register Berhasil") {
        setError(false);
        setHasil(true);
        setTextHasil(response);
      } else {
        setError(true);
        setHasil(true);
        setTextHasil(response.message);

        setMoreError(response.errors);
      }
    });
  };
  console.log(moreError);
  return (
    <>
      <div className=" min-h-screen flex justify-center items-center">
        <div className="bg-primary text-info p-3 rounded-lg w-3/4 flex flex-col justify-center items-center">
          <div className="p-3 text-3xl font-bold">
            <h1>Register</h1>
          </div>
          <div className="flex flex-col gap-2 w-full text-primary">
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full bg-base-100"
              value={dataForm.name}
              name="name"
              onChange={handleInputChange}
            />
            {validateEmail}
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full "
              value={dataForm.email}
              name="email"
              onChange={(e) => {
                handleInputChange(e);
                validasiEmail(e);
              }}
            />
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full "
              value={dataForm.password}
              name="password"
              onChange={(e) => {
                handleInputChange(e);
                validasiPassword(e);
              }}
            />
            {validatePassword}
            <input
              type="password"
              placeholder="Validasi password"
              className="input input-bordered w-full "
              value={dataForm.password_confirmation}
              name="password_confirmation"
              onChange={(e) => {
                handleInputChange(e);
                validasiPassword(e);
              }}
            />
          </div>
          <div className="w-full m-2 mt-2">
            <button
              className="bg-[#ff8906] hover:bg-[#c6781f] w-full rounded-md p-2"
              onClick={() => {
                handleSubmit();
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      {isNotif && (
        <>
          <div
            className={`min-h-screen w-full  notif flex items-center justify-center animate__animated ${
              !keluar ? "animate__slideInDown" : "animate__slideOutDown"
            }`}
          >
            <div className="bg-info p-5 text-primary border border-spacing-4 border-primary rounded-lg mt-20">
              <div className="p-3 flex justify-center items-center">
                {hasil ? (
                  <div className="flex flex-col">
                    <div>{textHasil}</div>
                    <div>
                      {Object.keys(moreError).length > 1 && (
                        <div className="flex flex-col ">
                          <button
                            className={
                              showError
                                ? "bg-red-500 hover:bg-red-600 p-1 text-primary rounded-lg"
                                : "bg-[#ff8906] hover:bg-[#c6781f] p-1 text-primary rounded-lg"
                            }
                            onClick={() => {
                              if (showError) {
                                setShowError(false);
                                setShowError1(true);
                                setTimeout(() => {
                                  setShowError1(false);
                                }, 500);
                              } else {
                                setShowError(true);
                              }
                            }}
                          >
                            {showError ? "show less error" : "show more error"}
                          </button>
                          {showError ? (
                            <div className="animate__animated animate__bounceIn">
                              {Object.entries(moreError).map(
                                ([key, value], index) => (
                                  <div key={index}>
                                    - {key}:{value}
                                  </div>
                                )
                              )}
                            </div>
                          ) : showError1 ? (
                            <div className="animate__animated animate__bounceOut">
                              {Object.entries(moreError).map(
                                ([key, value], index) => (
                                  <div key={index}>
                                    - {key}:{value}
                                  </div>
                                )
                              )}
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : validate ? (
                  <>
                    <div>
                      <h1>Validasi Ulang</h1>
                      <div className="flex flex-col gap-2">
                        <input
                          type="text"
                          placeholder="username"
                          className="input input-bordered w-full bg-base-100"
                          value={dataForm.name}
                          name="name"
                          readOnly
                        />

                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered w-full "
                          value={dataForm.email}
                          name="email"
                          readOnly
                        />
                        <div className="flex gap-1">
                          {" "}
                          <input
                            type={showPassword}
                            placeholder="password"
                            className="input input-bordered w-full "
                            value={dataForm.password}
                            name="password"
                            readOnly
                          />
                          <button
                            className="bg-[#ff8906] hover:bg-[#c6781f] p-1 text-info rounded-lg"
                            onClick={() => {
                              if (showPassword === "password") {
                                setShowPassword("text");
                              } else {
                                setShowPassword("password");
                              }
                            }}
                          >
                            show
                          </button>
                        </div>
                        <button
                          className="bg-[#ff8906] hover:bg-[#c6781f] p-1 text-info rounded-lg"
                          onClick={handleSubmitFinal}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  text
                )}
              </div>
              <div>
                {hasil && !error ? (
                  <button
                    className="bg-primary w-full rounded-lg hover:bg-info border text-info hover:text-primary border-primary"
                    onClick={() => {
                      setKeluar(true);
                      setTimeout(() => {
                        setIsNotif(false);
                        setKeluar(false);
                        setValidate(false);
                      }, 1000);
                    }}
                  >
                    Login
                  </button>
                ) : (
                  <button
                    className="bg-primary w-full rounded-lg hover:bg-info border text-info hover:text-primary border-primary"
                    onClick={() => {
                      setKeluar(true);
                      setTimeout(() => {
                        setIsNotif(false);
                        setKeluar(false);
                        setValidate(false);
                        setHasil(false);
                      }, 1000);
                    }}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
