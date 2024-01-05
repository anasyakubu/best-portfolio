import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./DisplayCom.scss";
import NYMApp from "../../../../public/NYMApp.png";
import AI from "../../../../public/AI.png";
import MGC from "../../../../public/MGC.png";
import NewsApp from "../../../../public/NewsApp.png";

interface displayProps {
  displayImg: any;
  tittle: string;
  links: any;
}

const DisplayCom = (props: displayProps) => {
  const { displayImg, tittle, links } = props;
  return (
    <div className="DisplayCom p-3 m-1">
      <div
        className="Cont"
        style={{
          // backgroundColor: "#f2f8fc",
          // color: "#3d4f60",
          borderBlockColor: "#122231",
          border: "1px solid",
          borderRadius: "10px",
        }}
      >
        <div className="p-5 ImgSection">
          <Link href={links} target="_blank">
            <Image
              className="Img rounded-md"
              src={displayImg}
              alt="Display Image"
            />
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <h6 className="text-xl font-medium text-black">{tittle}</h6>
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
            href={links}
            target="_blank"
            className="bg-transparent text-gray-900 font-medium border text-sm p-2  rounded-sm border-black"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayCom;
