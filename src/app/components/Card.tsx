import Image from "next/image";
import { FaBox, FaCamera, FaShoppingBag } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";

import { FaPhone } from "react-icons/fa";

import { Product } from "@/types/product";
import { FaCalendarAlt } from "react-icons/fa";

interface ProductProps {
  product: Product;
}

export default function Card({ product }: ProductProps) {
  return (
    <div className="w-[247px]">
      <div className="w-[247px] h-[155px] relative">
        {product.special && (
          <Image
            src="/images/special.svg"
            width={125}
            height={22}
            alt="Special"
            className="absolute top-0 left-0"
          />
        )}
        <div className="absolute top-3 left-3 flex items-center gap-[7.65px]">
          {product.camera && (
            <div className="flex items-center gap-2 text-white bg-black bg-opacity-30 rounded-[2px] p-[6px]">
              <FaCamera className="h-[12px]" />
              <div className="text-[11px] font-medium">{product.camera}</div>
            </div>
          )}
          {product.video && (
            <div className="flex items-center gap-2 text-white bg-black bg-opacity-30 rounded-[2px] p-[6px]">
              <Image
                src="/images/icons/video.svg"
                alt="Video"
                height={13}
                width={13}
              />
              <div className="text-[11px] font-medium">{product.video}</div>
            </div>
          )}
        </div>
        <Image src={product.path_image} width={247} height={155} alt="Car" />
      </div>
      <div className="grid grid-cols-4 gap-[2px] mt-[2px]">
        <div className="h-[3px] bg-[#EB2321]"></div>
        <div className="h-[3px] bg-[#CCCCCC]"></div>
        <div className="h-[3px] bg-[#CCCCCC]"></div>
        <div className="h-[3px] bg-[#CCCCCC]"></div>
      </div>
      <div className="flex mt-[17px]">
        <div className="font-bold text-[14px] mr-auto">{product.title}</div>
        <div className="w-0 h-0 border-b-[45px] border-b-[#EB2321] border-l-[15px] border-l-transparent"></div>
        <div>
          <div className="px-[9.5px] py-[2px] bg-[#EB2321] text-white">
            <div className="text-[13px] text-right line-through">
              ${product.old_price}
            </div>
            <div className="text-[14px] font-bold text-right">
              ${product.price}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] h-[3px] w-full bg-[#EB2321]"></div>
      <div className="flex flex-wrap gap-[15px] mt-[8px] font-sans">
        {product.engine && (
          <div className="flex items-center gap-1">
            <div className="text-[13px] text-[#888888]">{product.engine}</div>
            <Image
              src="/images/icons/engine.svg"
              width={12}
              height={9}
              alt="Engine"
              className="text-[#AAAAAA]"
            />
          </div>
        )}
        {product.year && (
          <div className="flex items-center gap-1">
            <div className="text-[13px] text-[#888888]">{product.year}</div>
            <FaCalendarAlt className="text-[#AAAAAA] w-[12px]" />
          </div>
        )}
        {product.fuel && (
          <div className="flex items-center gap-1">
            <div className="text-[13px] text-[#888888]">{product.fuel}</div>
            <Image
              src="/images/icons/fuel.svg"
              width={12}
              height={13}
              alt="Feul"
              className="text-[#AAAAAA]"
            />
          </div>
        )}
        {product.transmission && (
          <div className="flex items-center gap-1">
            <div className="text-[13px] text-[#888888]">
              {product.transmission}
            </div>
            <Image
              src="/images/icons/manual-transmission.svg"
              width={12}
              height={13}
              alt="Manual transmission"
              className="text-[#AAAAAA]"
            />
          </div>
        )}
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
