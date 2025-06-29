import React from 'react'
import Button from "../layouts/Button";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

const AddCart = (props) => {
  return (
    <div className=" w-full h-[500px] lg:w-1/4 bg-white p-[10px]  rounded-lg">
    <img className=" rounded-lg" src={props.img} alt="img" />
    <div className=" flex flex-col items-center mt-5 gap-3">
      <h2 className=" font-semibold text-xl">{props.title}</h2>
      <div className=" flex">
        <BsStarFill className=" text-brightColor" />
        <BsStarFill className=" text-brightColor" />
        <BsStarFill className=" text-brightColor" />
        <BsStarFill className=" text-brightColor" />
        <BsStarHalf className=" text-brightColor" />
      </div>
      <h3 className=" font-semibold text-lg">$15.99</h3>
      <Button title="Add To Card" />
    </div>
  </div>
  )
}

export default AddCart