const Banner = () => {
  return (
    <div className="w-11/12 mx-auto  rounded-2xl mt-8 relative overflow-hidden">
      <img
        src="/src/assets/rb_2148971570 3.jpg"
        alt=""
        className="absolute inset-0   w-full h-full object-cover "
      />
      <div className=" bg-[#131313]  py-16 px-43 space-y-6  grid place-items-center relative z-20">
        <img src="./src/assets/banner-main.png" alt="" />
        <h2 className="text-4xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-[#FFFFFF]/70 text-2xl">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border-2 border-[#E7FE29] rounded-2xl p-2 ">
          <button className="bg-[#E7FE29] py-3 px-5 rounded-xl">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
