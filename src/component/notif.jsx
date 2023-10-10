const Notif = (props) => {
  return (
    <>
      <div className=" min-h-screen w-full  notif flex items-center justify-center">
        <div className="bg-info p-5 text-primary border border-spacing-4 border-primary rounded-lg">
          <div>Notification</div>
          <div className="p-3 flex justify-center items-center">
            {props.text}
          </div>
          <div>
            <button
              className="bg-primary w-full rounded-lg hover:bg-info border text-info hover:text-primary border-primary"
              onClick={() => {
                props.setIsNotif(false);
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
