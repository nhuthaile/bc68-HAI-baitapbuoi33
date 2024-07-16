import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalGiay = ({ index, name, price, image, message, isOpen, isClose }) => {
  return (
    <>
      <Modal open={isOpen} onOk={isClose} onCancel={isClose}>
        <div className="w-full p-5 border-2 border-solid  bg-green-50">
          <img src={image} alt="" />
          <p className="text-xl mb-5">{message}</p>
          <h2 className="text-xl font-bold">{name}</h2>
          <h2 className="text-3xl my-2 text-green-500">$ {price}</h2>

          <button className="bg-black rounded-md text-white py-2 px-5 hover:text-green-500">
            add to carts <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalGiay;
