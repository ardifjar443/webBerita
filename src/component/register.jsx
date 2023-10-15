import { useEffect, useState } from "react";
import Notif from "./notif";

const Register = () => {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validasiPassword = (e) => {
    if (e.target.value === formData.password) {
      setValidatePassword(<></>);
    } else {
      setValidatePassword(
        <>
          <div className="bg-[#ff8906] text-center p-1 rounded-md text-primary">
            password tidak sama
          </div>
        </>
      );
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
    if (formData.name === "") {
      setIsNotif(true);
      setText("tolong masukan nama anda");
    } else if (formData.email === "") {
      setIsNotif(true);
      setText("tolong masukan email anda");
    } else if (formData.password === "") {
      setIsNotif(true);
      setText("tolong masukan password anda");
    } else if (formData.password_confirmation === "") {
      setIsNotif(true);
      setText("tolong masukan validasi password");
    } else {
      setIsNotif(true);
      setValidate(true);
    }
  };

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
              value={formData.name}
              name="name"
              onChange={handleInputChange}
            />
            {validateEmail}
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full "
              value={formData.email}
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
              value={formData.password}
              name="password"
              onChange={handleInputChange}
            />
            {validatePassword}
            <input
              type="password"
              placeholder="Validasi password"
              className="input input-bordered w-full "
              value={formData.password_confirmation}
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
                {validate ? (
                  <>
                    <div>
                      <h1>Validasi Ulang</h1>
                      <div className="flex flex-col gap-2">
                        <input
                          type="text"
                          placeholder="username"
                          className="input input-bordered w-full bg-base-100"
                          value={formData.name}
                          name="name"
                          readOnly
                        />

                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered w-full "
                          value={formData.email}
                          name="email"
                          readOnly
                        />
                        <div className="flex gap-1">
                          {" "}
                          <input
                            type={showPassword}
                            placeholder="password"
                            className="input input-bordered w-full "
                            value={formData.password}
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
                          {console.log(showPassword)}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  text
                )}
              </div>
              <div>
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
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
