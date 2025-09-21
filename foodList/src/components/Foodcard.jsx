import React from "react";

function Foodcard({name,img,rating}) {
  return (
    <div

      className="border bg-gray-100 border-gray-300  h-[400px] w-[250px] bg-cover bg-center rounded-xl hover:scale-105 transition-transform  duration-300"
    >
        <div       style={{
        backgroundImage:
          `url(${img})`,
      }} className="h-2/3 bg-cover bg-center rounded-t-xl"></div>
      <div className="flex justify-center items-center text-lg font-semibold flex-col"><h1>{name}</h1> <h3 className="text-red-800">rating: {rating}</h3></div>
    </div>
  );
}

export default Foodcard;
