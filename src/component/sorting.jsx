const Sorting = () => {
  return (
    <>
      <hr className="mt-10" />
      <div className="flex justify-center items-center gap-2 p-5 ">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full text-center h-8 "
        />
        <button className="btn">
          <svg
            className="w-5 h-5"
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
      <div className=" overflow-x-scroll flex pb-4  ps-10 gap-2">
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
        <div className="badge  hover:badge-info hover:text-black">default</div>
      </div>
    </>
  );
};

export default Sorting;
