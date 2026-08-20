import RgbImg from "../../assets/rb.jpg";
import BtnImg from "../../assets/frame.jpg";

const Newsletter = () => {
  return (
    <div className="relative z-10  w-11/12 mx-auto rounded-2xl py-8  md:py-8 lg:py-16 -mb-58 ">
      <div className="border-2 border-amber-200   rounded-2xl p-2 md:p-4  ">
        <div
          style={{ backgroundImage: `url(${RgbImg})` }}
          className=" grid  place-items-center  space-y-6 rounded-2xl  shadow-xl py-10 px-4 mb:16 lg:py-22 mb:px-10 lg:px-20 bg-no-repeat bg-cover "
        >
          <h2 className="font-bold text-2xl lg:text-3xl ">
            Subscribe to our Newsletter{" "}
          </h2>
          <p className="text-base mb:text-xl">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center w-full  gap-3">
            <input
              className="w-full sm:w-80 md:w-96 px-4 h-14  rounded-xl border-2 border-[#131313]/15 outline-none "
              type="text"
              placeholder="Enter your email"
            />
            <button
              style={{ backgroundImage: `url(${BtnImg})` }}
              className="  rounded-xl ml-4 bg-cover bg-center w-full  sm:w-36 h-14"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
