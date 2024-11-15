// Figma: https://www.figma.com/design/Zxg8TR5onmWXGe19vleFdX/Final-Part3?node-id=0-1&t=hWKYRPWR9v4U8pgq-1
"use client";

import Image from "next/image";

import calendar from "../public/Icon (11).svg";
import avaible from "../public/Vector.svg";
import ratings from "../public/Star 5.svg";
import star from "../public/Shape (3).svg";
import genrens from "../public/Icon (12).svg";
import music from "../public/Image (38).svg";
import doctor from "../public/Image (39).svg";
export default function Home() {
  return (
    <div className="max-w-[650px] w-full m-auto bg-[#141414] rounded-[10px] p-16 mt-16">
      <div className="flex">
        <Image src={calendar} alt="calendar" width={24} height={24} />
        <p className="font-medium text-xl px-2 text-[#999999]">Released Year</p>
      </div>
      <div>
        <p className="font-semibold text-xl my-5 ">2022</p>
      </div>
      <div className="flex">
        <Image src={avaible} alt="avaible" width={24} height={24} />
        <p className="font-medium text-xl px-2 text-[#999999]">Available Languages</p>
      </div>
      <div className="flex flex-wrap justify-between my-7">
        <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700 ">
          English
        </button>
        <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700">
          Hindi
        </button>
        <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700">
          Tamil
        </button>
        <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700">
          Telegu
        </button>
        <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700">
          Kannada
        </button>
      </div>
      <div className="flex ">
        <Image src={ratings} alt="rating" width={24} height={24} />
        <p className="font-medium text-xl text-[#999999] px-2">Ratings</p>
      </div>

      <div className="flex justify-between">
        <div className="flex bg-[#141414] rounded-md max-w-[200px]   border border-gray-700 my-7">
          <div className="p-5 ">
            <p className="font-medium text-lg  px-2 ">IMDB</p>
            <div className="flex ">
              <div className="flex">
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
              </div>
              <p className="px-3">5</p>
            </div>
          </div>
        </div>

        <div className="flex bg-[#141414] rounded-md max-w-[200px] my-7  border border-gray-700">
          <div className="p-5">
            <p className="font-medium text-lg  px-2 ">IMDB</p>
            <div className="flex ">
              <div className="flex">
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
                <Image src={star} alt="star" width={24} height={24} />
              </div>
              <p className="px-3">5</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <Image src={genrens} alt="genres" width={24} height={25} />
          <p className="font-medium text-xl px-2 text-[#999999]">Genres</p>
        </div>
        <div className="flex justify-between my-7">
          <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700">
            Sci-Fi TV
          </button>
          <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700">
            Teen TV Shows
          </button>
          <button className="bg-[#141414] rounded-md flex justify-center px-4 py-2 border border-gray-700">
            US TV Shows
          </button>
        </div>
      </div>

      <div>
        <div>
          <p className="font-medium text-xl px-2 text-[#999999]">Director</p>
        </div>
        <div className="bg-[#141414] rounded-md p-2 flex border border-gray-700 my-3">
          <div>
            <Image src={doctor} alt="doctor" width={56} height={60} />
          </div>
          <div className="px-2">
            <p className="text-white font-medium text-base">
              The Duffer Brothers
            </p>
            <p className="py-2  text-[#999999]">From USA</p>
          </div>
        </div>
        <div className="my-7">
          <div>
            <p className="font-medium text-xl px-3 text-[#999999]">Music</p>
          </div>

          <div className="bg-[#141414] rounded-md p-2 flex border border-gray-700 my-3">
            <div>
              <Image src={music} alt="music" width={56} height={60} />
            </div>

            <div className="px-3">
              <p className="text-white">The Duffer Brothers</p>
              <p className=" text-[#999999]">From USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
