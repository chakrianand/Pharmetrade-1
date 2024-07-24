

// import React from "react";
// import { Link } from "react-router-dom"; 

// const ProductSection = ({ products, heading, path }) => {
//   return (
//     <div className="bg-white w-full p-4">
//       <h1 className="text-2xl font-bold text-text-blue">{heading}</h1>
//       <div className="grid grid-cols-3 grid-rows-2 p-2">
//         {products.map((item) => (
//           <div key={item.id} className="">
//             <div className="">
//               <img
//                 className="w-[160px] h-[140px] object-contain bg-slate-100 rounded-sm"
//                 src={item.img}
//                 alt={item.name}
//               />
//             </div>
//             <div className="text-base">{item.name}</div>
//             <div className="text-sm mb-4">{item.price}</div>
//           </div>
//         ))}
//       </div>
//       <Link to={path} className="font-semibold hover:text-red-500 flex justify-end ">See all products</Link>
//     </div>
//   );
// };

// export default ProductSection;


import React from "react";
import { Link } from "react-router-dom"; 
import addcart from "../../../assets/cart1_icon.png";
import fav from "../../../assets/Wishlist1_icon.png";
import other from "../../../assets/compare1_Icon.png";
const ProductSection = ({ products, heading, path }) => {
  return (
    <div className="bg-white w-full p-4">
      <h1 className="text-2xl font-bold text-text-blue">{heading}</h1>
      <div className="grid grid-cols-3 grid-rows-2 p-2">
        {products.map((item) => (
          <div key={item.id} className="snap-center border rounded-lg bg-gray-200 shrink-0 m-3">
            {/* <div className="">
              <img
                className="w-[160px] h-[140px] object-contain bg-white-100 rounded-sm"
                src={item.img}
                alt={item.name}
              />
            </div> */}
            <div className="relative rounded-t-lg   bg-white">
                <img src={fav} 
                className="absolute h-6 right-0 p-1"
                />
                 

                <img
                  src={item.img}
                  className="h-48 w-48  object-contain rounded-lg "
                />
                <img src={other} className=" h-5 w-5 right-1 absolute bottom-1 text-green-700"/>
              </div>
            {/* <div className="text-base bg-gray-600 ">{item.name}</div>
            <div className="text-sm mb-4 bg-gray-600">{item.price}</div> */}

<div className=" p-2 rounded-b-lg">
                <div className="flex justify-between  flex-col font-medium">
                <div className="flex justify-between">
                  <h2 className="text-black font-bold text-sm">{item.name}</h2>
                   
                    </div>
                  <div className="flex gap-2">
                  <h3 className=" text-gray-600 line-through text-sm">{item.price}</h3>
                  <h3 className=" text-gray-600 text-sm">{"$50.00"}</h3>

                  </div>
                </div>
                <div className="flex  border-gray-300   items-center">
                  <div className="flex items-center ">
                    <img src={addcart} className="h-6 p-1 " />
                    <p className="text-blue-900 font-semibold text-sm">Add to Cart</p>
                  </div>
                  {/* <div>
                    <img src={fav} className="h-8 p-1" />
                  </div>
                  <div>
                    <img src={other} className="h-8 p-1" />
                  </div> */}
                </div>
              </div>
          </div>
        ))}
      </div>
      
      <Link to={path} className="font-semibold hover:text-red-500 flex justify-end  underline">See all products</Link>
    </div>
  );
};

export default ProductSection;
