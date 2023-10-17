import { useState } from "react";
import { login } from "../user";
import Notif from "./notif";
import { Link } from "react-router-dom";

const Login = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validateEmail, setValidateEmail] = useState(true);
  const [isNotif, setIsNotif] = useState(false);
  const [text, setText] = useState("");
  const [kembali, setKembali] = useState(false);
  const handleInputChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const validasiEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }
  };
  const handleSubmit = () => {
    const form = new FormData();
    form.append("email", dataForm.email);
    form.append("password", dataForm.password);
    login(form).then((response) => {
      if (response === "OK") {
        setKembali(false);
        setText(
          <>
            <div className="flex flex-col gap-3 items-center justify-center">
              <h1>Anda Berhasil Login</h1>
              <Link
                to={"/"}
                className="p-2 bg-[#ff8906] hover:bg-[#c6781f] rounded-md text-info"
              >
                Kembali Ke Beranda
              </Link>
            </div>
          </>
        );
        setIsNotif(true);
      } else if (response === "Unauthorized") {
        setKembali(true);
        setText(
          <>
            <div className="flex flex-col gap-3 items-center">
              <h1 className="font-bold">Akun anda Tidak Ditemukan </h1>
              <p>coba cek lagi email anda atau password anda</p>
            </div>
          </>
        );
        setIsNotif(true);
      }
    });
  };
  return (
    <>
      <div className=" min-h-screen flex justify-center items-center">
        <div className="bg-primary text-info p-3 rounded-lg shadow-md flex flex-col justify-center items-center gap-4">
          <div className="text-3xl font-bold">Login</div>
          <div className="flex flex-col gap-4 text-primary">
            <div className="flex flex-col gap-2">
              {validateEmail ? (
                ""
              ) : (
                <div className="bg-[#ff8906] text-center p-1 rounded-md text-primary">
                  Masukan dengan dengan format yang benar
                </div>
              )}
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
                name="email"
                value={dataForm.email}
                onChange={(e) => {
                  handleInputChange(e);
                  validasiEmail(e);
                }}
              />
            </div>
            <div className="flex gap-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
                name="password"
                value={dataForm.password}
                onChange={handleInputChange}
              />
              <button
                className="p-2 bg-[#ff8906] hover:bg-[#c6781f] rounded-md text-primary"
                onClick={() => {
                  if (showPassword) {
                    setShowPassword(false);
                  } else {
                    setShowPassword(true);
                  }
                }}
              >
                {showPassword ? "hide" : "show"}
              </button>
            </div>
          </div>
          <div className="w-full ">
            <button
              className="p-2 bg-[#ff8906] hover:bg-[#c6781f] w-full rounded-lg"
              onClick={() => {
                if (validateEmail) {
                  handleSubmit();
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {isNotif && (
        <Notif
          setIsNotif={setIsNotif}
          text={text}
          kembali={!kembali}
          search={!kembali}
        />
      )}
    </>
  );
};

export default Login;
