import React from "react";

const ShopGiay = ({ name, price, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-5 border-2 border-solid cursor-pointer hover:bg-green-50"
    >
      <img src={image} alt="" />
      <h2 className="text-xl font-bold">{name}</h2>
      <h2 className="text-3xl my-2 text-green-500">$ {price}</h2>
      <button className="bg-black rounded-md text-white py-2 px-5 hover:text-green-500">
        add to carts <i className="fa-solid fa-cart-shopping" />
      </button>
    </div>
  );
};

export default ShopGiay;
