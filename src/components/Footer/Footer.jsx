import BannerImg from "../../assets/banner-main.png";
import BtnImg from "../../assets/frame.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] ">
      <div className="  pt-20 lg:pt-60 md:pt-32 pb-18">
        <div className="flex justify-center">
          <img src={BannerImg} alt="" className="w-40 sm:w-48 md:w-auto" />
        </div>
        <div className="flex flex-col sm:flex-row justify-center    items-center sm:items-center  gap-10  md:gap-16 px-6 md:px-10 mt-8">
          <div className="text-white space-y-4 w-full sm:w-52 text-center sm:text-left">
            <h2 className="text-sm font-semibold">About Us </h2>
            <p className="text-xs text-white/60 leading-5">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>
          <div className="text-white space-y-4 text-center sm:text-left  ">
            <h2 className="text-sm font-semibold sm:text-center">
              Quick Links
            </h2>
            <ul className="list-disc pl-5 space-y-4  text-xs text-white/60">
              <li>Home</li>
              <li> Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-white space-y-2 text-center sm:text-left">
            <h2 className="text-sm font-semibold">Subscribe</h2>
            <p className="text-xs text-white/60 leading-5">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-3  sm:gap-0 ">
              <input
                className="w-full sm:w-80 md:w-96 px-4 h-14  rounded-xl border-2 border-[#131313]/15 outline-none  bg-white text-black placeholder:text-gray-500 sm:border-r-0 sm:rounded-r-none"
                type="text"
                placeholder="Enter your email"
              />
              <button
                style={{ backgroundImage: `url(${BtnImg})` }}
                className="  rounded-xl sm:border-l-0 sm:rounded-l-none  bg-cover bg-center w-full  sm:w-36 h-14"
              ></button>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <p className="text-[#FFFFFF]/70 text-center border-t-2 border-[#FFFFFF]/10 py-4 shadow-xl">
        @2024 Your Company All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
