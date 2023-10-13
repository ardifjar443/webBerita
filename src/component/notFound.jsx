import { useState } from "react";
import Notif from "./notif";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [isNotif, setIsNotif] = useState(false);
  return (
    <>
      <div className=" min-h-screen flex flex-col items-center justify-center">
        <div>
          <h1 className=" text-3xl font-bold">
            404 - Halaman Tidak Di Temukan
          </h1>
        </div>
        <div className="m-3">
          <button
            className="bg-primary p-2 rounded-lg text-info hover:bg-info hover:text-primary"
            onClick={() => {
              setIsNotif(true);
            }}
          >
            Cari Halaman / Berita
          </button>
        </div>
        <div>
          <Link
            to="/"
            className="bg-primary p-2 rounded-lg text-info hover:bg-info hover:text-primary"
          >
            Kembali Ke Halaman Utama
          </Link>
        </div>
      </div>
      {isNotif && (
        <Notif
          setIsNotif={setIsNotif}
          isNotif={isNotif}
          text={
            <div className="flex flex-col items-center">
              <p>Maaf saat ini pencarian masih belum tersedia</p>
              <p className="font-bold">masih dalam tahap development</p>
              <Link
                to="/"
                className="p-2 bg-primary text-info hover:bg-info hover:text-primary rounded-lg"
              >
                Kembali Ke Halaman Utama
              </Link>
            </div>
          }
        />
      )}
    </>
  );
};

export default NotFound;
