import { useEffect, useState } from "react";

const Notif = (props) => {
  const [keluar, setKeluar] = useState(false);
  const [text, setText] = useState(<></>);
  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  return (
    <>
      <div
        className={`min-h-screen w-full  notif flex items-center justify-center animate__animated ${
          !keluar ? "animate__slideInDown" : "animate__slideOutDown"
        }`}
      >
        <div className="bg-info p-5 text-primary border border-spacing-4 border-primary rounded-lg mt-20">
          {!props.search && <div>Notification</div>}
          <div className="p-3 flex justify-center items-center">{text}</div>
          <div>
            <button
              className="bg-primary w-full rounded-lg hover:bg-info border text-info hover:text-primary border-primary"
              onClick={() => {
                setKeluar(true);
                setTimeout(() => {
                  props.setIsNotif(false);
                }, 1000);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notif;
