"use client";

import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const styleSlider = {
  rail: {
    backgroundColor: "#EEEEEE",
    height: "4px",
  },
  track: {
    backgroundColor: "#232628",
    height: "4px",
  },
  handle: {
    backgroundColor: "#FFFFFF",
    border: "3.5px solid #232628",
    height: "15px",
    width: "15px",
    marginLeft: "0px",
    marginTop: "-5.5px",
  },
};

export default function SearchOption() {
  return (
    <div>
      <div className="w-[248px] shadow-lg">
        <Header />
        <Form />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="bg-[#232628] text-white px-[21px] pt-[32px] pb-[29px]">
      <div className="flex items-center gap-[15px]">
        <Image
          src="/images/icons/search-car.svg"
          width={40}
          height={29}
          alt="Search Options"
        />
        <div className="font-bold size-[18px] w-full">Search Options</div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="px-[22px] py-[24px] space-y-[16px] text-[#232628]">
      <select className="app-select">
        <option>Art</option>
      </select>
      <select className="app-select text-[#555555]">
        <option>Model</option>
      </select>
      <select className="app-select text-[#555555]">
        <option>Model Set</option>
      </select>
      <MileageSlider />
      <PriceSlider />
      <div>
        <button className="app-btn-red w-full mt-[20px]">RESET ALL</button>
      </div>
    </div>
  );
};

const MileageSlider = () => {
  const [value, setValue] = useState([0, 500000]);

  const handleChange = (newValue?: number | number[]) => {
    if (newValue && Array.isArray(newValue)) setValue(newValue);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-[14px]">Mileage</div>
        <div className="text-[14px]">
          {value[0]}mi — {value[1]}mi
        </div>
      </div>
      <div className="mt-[17px]">
        <Slider
          range
          allowCross={false}
          min={0}
          max={500000}
          step={10000}
          value={value}
          onChange={handleChange}
          styles={styleSlider}
        />
      </div>
    </div>
  );
};

const PriceSlider = () => {
  const [value, setValue] = useState([0, 300000]);

  const handleChange = (newValue?: number | number[]) => {
    if (newValue && Array.isArray(newValue)) setValue(newValue);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-[14px]">Price</div>
        <div className="text-[14px]">
          ${value[0]} — ${value[1]}
        </div>
      </div>
      <div className="mt-[17px]">
        <Slider
          range
          allowCross={false}
          min={0}
          max={300000}
          step={10000}
          value={value}
          onChange={handleChange}
          styles={styleSlider}
        />
      </div>
    </div>
  );
};
