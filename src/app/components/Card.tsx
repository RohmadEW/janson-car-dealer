import Image from "next/image";
import { FaBox, FaShoppingBag } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";

import { FaPhone } from "react-icons/fa";

import { FaCalendarAlt } from "react-icons/fa";

export default function Card() {
  return (
    <div className="w-[247px]">
      <div className="w-[247px] h-[155px]">
        <Image src="/images/car-1.png" width={247} height={155} alt="Car" />
      </div>
      <div className="grid grid-cols-4 gap-[2px] mt-[2px]">
        <div className="h-[3px] bg-[#EB2321]"></div>
        <div className="h-[3px] bg-[#CCCCCC]"></div>
        <div className="h-[3px] bg-[#CCCCCC]"></div>
        <div className="h-[3px] bg-[#CCCCCC]"></div>
      </div>
      <div className="flex justify-between gap-1 mt-[17px]">
        <div className="font-bold text-[14px]">New 3.6 L 2021 Ford Bronco</div>
        <div className="px-[9.5px] py-[2px] bg-[#EB2321] text-white">
          <div className="text-[13px] text-right">$45&nbsp;000</div>
          <div className="text-[14px] font-bold text-right">$40&nbsp;000</div>
        </div>
      </div>
      <div className="mt-[20px] h-[3px] w-full bg-[#EB2321]"></div>
      <div className="flex flex-wrap gap-[15px] mt-[4px] font-sans">
        <div className="flex items-center gap-1">
          <div className="text-[13px] text-[#888888]">3.6 L</div>
          <Image
            src="/images/icons/engine.svg"
            width={12}
            height={9}
            alt="Engine"
            className="text-[#AAAAAA]"
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[13px] text-[#888888]">2021</div>
          <FaCalendarAlt className="text-[#AAAAAA] w-[12px]" />
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[13px] text-[#888888]">5451</div>
          <Image
            src="/images/icons/fuel.svg"
            width={12}
            height={13}
            alt="Feul"
            className="text-[#AAAAAA]"
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="text-[13px] text-[#888888]">Manual</div>
          <Image
            src="/images/icons/manual-transmission.svg"
            width={12}
            height={13}
            alt="Manual transmission"
            className="text-[#AAAAAA]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[8px] mt-[12px]">
        <button className="btn btn-outline border-[#3B3E444D] w-full btn-sm app-rounded shadow-md text-[#888888]">
          <FaPhone className="w-[8px]" />
          <div className="font-sans text-[12px]">Anrufen</div>
        </button>
        <button className="btn btn-outline border-[#3B3E444D] w-full btn-sm app-rounded shadow-md text-[#888888]">
          <FiRepeat className="w-[10px]" />
          <div className="font-sans text-[12px]">Rückruf</div>
        </button>
        <button className="btn btn-outline border-[#3B3E444D] w-full btn-sm app-rounded shadow-md text-[#888888]">
          <FaBox className="w-[8px]" />
          <div className="font-sans text-[12px]">Anfrage</div>
        </button>
        <button className="btn btn-error bg-[#EB2321] w-full btn-sm app-rounded shadow-md text-white">
          <FaShoppingBag className="w-[8px]" />
          <div className="font-sans text-[12px]">Direktkauf</div>
        </button>
      </div>
    </div>
  );
}