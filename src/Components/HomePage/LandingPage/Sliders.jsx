import React from "react";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import right from "../../../assets/arrowright.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import left from "../../../assets/arrowleft.png";
// import mobile from "../../../assets/mobile.png";
import mobile from "../../../assets/Mobile app.png";
import { useNavbarContext } from "../../NavbarContext";
import screen1 from "../../../assets/Icons/Screen dummy-1.png";
import screen2 from "../../../assets/Icons/Screen dummy-2.png";
import screen3 from "../../../assets/Icons/Screen dummy-3.png";
import screen4 from "../../../assets/Icons/Screen dummy-4.png";
import other from "../../../assets/compare1_Icon.png";
import addcart from "../../../assets/cart1_icon.png";
import fav from "../../../assets/Wishlist1_icon.png";
import mask from "../../../assets/mask.png";
import covid from "../../../assets/covid.png";
import covid1 from "../../../assets/covid1.jpg";
import mask1 from "../../../assets/mask1.jpg";
import BuyImg from "../../../assets/Buy_icon.png"
import JoinImg from "../../../assets/Join-icon.png"
import SellImg from "../../../assets/Sell-icon.png"
import BidImg from "../../../assets/Bid-icon.png"
import { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Content from "../../Content";
// import { IoIosArrowUp } from "react-icons/io";
import OfferSlider from "../Components/OfferSlider";
import ProductSlider from "../Components/ProductSlider";
import RxOtcProducts from "../Components/ProductSection";
import ProductSection from "../Components/ProductSection";
import { IoSearchOutline, IoLockClosedOutline } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import AnimatedText from "../Components/AnimatedText";

function Sliders() {
  const searchBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("");
          } else {
            entry.target.classList.remove("");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (searchBarRef.current) {
      observer.observe(searchBarRef.current);
    }

    return () => {
      if (searchBarRef.current) {
        observer.unobserve(searchBarRef.current);
      }
    };
  }, []);
  const images = [img1, img2, img3, img4];
  const newProducts = [
    { id: 1, img: img1, name: "Nature Made", price: "$99.00" },
    { id: 2, img: img2, name: "Aspirin Syrup", price: "$89.00" },
    { id: 3, img: img3, name: "Allegra Allergy", price: "$79.00" },
    { id: 4, img: img4, name: "Zinc Tablets", price: "$69.00" },
    { id: 5, img: img5, name: "NyQuil Tablets", price: "$59.00" },
    { id: 6, img: img1, name: "Nature Made", price: "$49.00" },
    { id: 7, img: img2, name: "Stylish Mask", price: "$39.00" },
    { id: 8, img: img3, name: "Daily Mask", price: "$29.00" },
    { id: 9, img: img4, name: "Night Mask", price: "$19.00" },
    { id: 10, img: img5, name: "Morning Mask", price: "$9.00" },
  ];

  const mobiles = [mobile, mobile, mobile, mobile, mobile];
  const screens = [mask, covid, covid1, mask1];
  const { pop } = useNavbarContext();

  const steps = [
    {
      // title: "Step 01",
      img: BuyImg,
      heading: "Buy ",
      content: "Discover Quality Health Products: Shop Now",
    },
    {
      // title: "Step 02",
      img: JoinImg,
      heading: "Join",
      content: "Join Our Community: Become a Member",
    },
    {
      // title: "Step 03",
      img: SellImg,
      heading: "Sell",
      content: "Sell Your Products: Partner with Us",
    },
    {
      // title: "Step 02",
      img: BidImg,
      heading: "Bid",
      content: "Unlock Great Deals through Bidding: Start Now",
    },
  ];

  return (
    <>
      <div className="">
        <div className="w-full flex justify-between items-center ">
          <div className="w-[48%]">
            <ProductSection
              products={newProducts.slice(0, 6)}
              heading="Rx Items"
              path="/products"
            />
          </div>
          <div className="w-[48%]">
            <ProductSection
              products={newProducts.slice(0, 6)}
              heading="OTC Items"
              path="/bid"
            />
          </div>
        </div>
        {/* <div>
          <ProductSlider Title={"New Products"} data={newProducts} />
        </div> */}

        <div
          className={
            pop
              ? " getTouchs  xl:w-80% relative h-5% md:mt-24 xl:mt-48 xl:mx-8 rounded-md xl:p-10 xl:flex xl:flex-col xl:justify-center"
              : " getTouchs md:ml-0 md:w-80% md:h-5% xl:w-80% relative h-15% md:mt-12 xl:mt-20 xl:mx-8 rounded-md xl:p-5 xl:flex xl:flex-col xl:justify-center"
          }
        >
          <div className="border-2 md:p-0 border-white w-auto md:h-5% md:w-auto xl:w-auto xl:h-5% lg:ml-4 xl:flex xl:justify-center lg:mr-4 lg:mt-4 lg:mb-4 xl:ml-12 rounded-md">
            <p className="absolute xl:top-4 z-5 right-1/2  h-5% bg-box-blue text-white px-4 py-2 rounded-md  text-2xl">
              Get in touch{" "}
            </p>
            <div className="ml-10 md:flex md:flex-row md:gap-10 lg:gap-20 xl:flex xl:flex-row xl:gap-50 ">
              <div className="flex items-center justify-center lg:pb-4 lg:pl-4 xl:pr-4">
                <div
                  ref={searchBarRef}
                  className="relative flex items-center w-full max-w-md"
                >
                  <div className="md:w-screen xl:w-fit xl:pl-8 ">
                    <ul className="md:text-xl xl:text-2xl text-white font-light  bounce-in-top  w-96">
                      <li className="w-96 ">Manage Inventory</li>
                      <li className="">Increase cash flow </li>
                      <li className="">Grow you business</li>
                      <li className="">Promote products and deals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 pr-36 mt-7  justify-start items-center">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-72 h-10 px-5 "
                />
                <input
                  type="text"
                  placeholder="Enter Your Contact"
                  className="w-72 h-10 px-5"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-72 h-10 px-5"
                />
                <button className="bg-box-blue text-white rounded-lg w-fit p-2 my-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full flex justify-center py-4">
          {/* <div className="flex justify-center items-center  mt-16">
            {mobiles.map((item, key) => {
              return (
                <div key={key} className="flex justify-center mr-4">
                  <img
                    src={item}
                    alt={`Mobile ${key}`}
                    className="h-[350px] w-52 xl:w-[250px] hover:scale-110 transition duration-300 ease-in-out rounded-lg"
                  />
                </div>
              );
            })}
          </div> */}

          <div className="w-full flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-semibold  text-text-blue my-4">
              Get Our Mobile App Today
            </h1>

            <div className="flex w-[80%] justify-center">
              <div className="w-[55%]  h-full flex flex-col justify-center">
                {/* <h2 className="text-[28px] font-semibold bg-gradient-to-r from-gray-500 to-white bg-clip-text text-blue-900">
                  Your Trusted Pharmacy for Purchasing and Selling Health
                  Products
                </h2> */}
                <AnimatedText />

                {/* <p className="text-[20px] text-gray-900 font-semibold">
                Your Trusted Pharmacy for Purchasing and Selling Health
                Products
                </p> */}

                <div className="flex flex-col  w-[90%]">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex  items-center p-1 rounded-lg shadow-inner border w-full my-2 "
                    >
                      {/* <div className="text-xl font-semibold text-blue-900">
                      {step.title}
                    </div> */}
                      <img className="text-xl p-1 w-9 h-9 text-blue-900"
                        src={step.img}
                      />
                      <div className=" p-2 w-full ">
                        <h2 className="text-[16px] font-bold text-blue-900">
                          {step.heading}
                        </h2>
                        <p className="text-[15px] text-gray-700 font-medium">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full ">
                <button className="border border-gray-500 bg-blue-900 text-white mt-2 p-2 rounded-lg w-44 mb-8">
                  Download Now
                </button>

                </div>
               
              </div>
              <div className="w-[45%] h-full flex justify-center items-center">
                <img src={mobile} className="w-[250px] h-[400px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sliders;