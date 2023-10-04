const Sorting = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 p-5 bg-primary mx-5 mt-5 rounded-lg ">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full text-center h-8 "
        />
        <button className="btn text-info hover:text-primary-focus bg-primary hover:bg-info">
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
      <div className=" overflow-x-scroll flex p-3 rounded-b-xl  ps-10 gap-2 mx-10 bg-[#ff8906] ">
        <div className="badge bg-primary text-info p-4  hover:bg-[#ff8906] hover:text-black">
          default
        </div>
        <div className="badge bg-primary text-info p-4  hover:bg-[#ff8906] hover:text-black">
          default
        </div>
        <div className="badge bg-primary text-info p-4  hover:bg-[#ff8906] hover:text-black">
          default
        </div>
        <div className="badge bg-primary text-info p-4  hover:bg-[#ff8906] hover:text-black">
          default
        </div>
        <div className="badge bg-primary text-info p-4  hover:bg-[#ff8906] hover:text-black">
          default
        </div>
        <div className="badge bg-primary text-info p-4  hover:bg-[#ff8906] hover:text-black">
          default
        </div>
      </div>
    </>
  );
};

export default Sorting;
