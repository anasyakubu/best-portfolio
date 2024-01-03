import Image from "next/image";
import React from "react";
import DisplayDemo from "../../../../public/diaplayDemo.png";
import Link from "next/link";
import "./DisplayCom.scss";

const DisplayCom = () => {
  return (
    <div className="DisplayCom p-3">
      <div
        className="Cont"
        style={{
          // backgroundColor: "#122231",
          // color: "#3d4f60",
          borderBlockColor: "#122231",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        <div className="p-5 ImgSection">
          <Link href="/">
            <Image className="Img" src={DisplayDemo} alt="Display Image" />
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <h6 className="text-xl font-medium text-black">Strip</h6>
        <p
          className="text-sm leading-8 mt-2"
          style={{ color: "#122231" }} //#3d4f60 122231
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          nesciunt a repudiandae facere fuga fugiat et iusto. Minus, minima
          consequatur!
        </p>
        <div className="mt-5">
          <Link
            href="/"
            className="bg-transparent text-gray-900 font-thin border text-sm p-2  rounded-sm border-black"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayCom;
