import Card from "@/app/components/Card";
import { listProducts } from "@/types/product";
import { FaChevronRight } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { SlGrid } from "react-icons/sl";

export default function Content() {
  return (
    <div className="w-[802.5px]">
      <div className="w-full">
        <div className="font-bold text-[25px]">Cars for sale</div>
        <div className="font-bold text-[20px] mt-[14px]">10 matches</div>
        <div className="flex items-center justify-end gap-2">
          <button className="btn btn-sm">
            <SlGrid className="w-[16px] h-[16px] text-[#8F8F8F]" />
          </button>
          <button className="btn btn-sm btn-ghost">
            <FaListUl className="w-[16px] h-[16px] text-[#8F8F8F]" />
          </button>
          <div className="font-sans text-[12px] text-[#888888]">SORT BY :</div>
          <div className="w-[160px]">
            <select className="select bg-[#ECEFF3] app-rounded select-sm w-[160px] h-[32px] text-[#555555] text-[13px]">
              <option>Price: lowest first</option>
            </select>
          </div>
        </div>
        <div className="mt-[45px]">
          <Filter />
        </div>
        <div className="mt-[17px]">
          <div className="flex items-center border-b-[#EB2321] border-b-[4px]">
            <div className="text-[13px] font-bold uppercase py-[6px] px-[16px] bg-[#EB2321] text-white">
              Featured Classified
            </div>
            <div className="w-0 h-0 border-b-[31.5px] border-b-[#EB2321] border-r-[31.5px] border-r-transparent mr-auto"></div>
            <button className="btn btn-xs btn-ghost ">
              <div className="font-sans text-[#777777] font-light">
                Show all
              </div>
            </button>
          </div>
        </div>
        <div className="mt-[25px] grid grid-cols-3 gap-[30px]">
          {listProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
        <div className="mt-[140px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

const Filter = () => {
  return (
    <div className="flex items-center">
      <div className="font-sans text-[13px] shadow-sm py-[6px] px-[13px] border-[#3E444D]">
        <div className="flex items-center gap-1">
          <div className="text-[#AAAAAA]">Condition:</div>
          <div className="text-[#555555]">New</div>
          <div className="ml-1">
            <IoMdClose className="text-[#AAAAAA]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-[20px]">
        <button className="btn btn-disabled btn-sm w-[34px] h-[35px] rounded-[3px]">
          <div className="text-[14px] text-white">1</div>
        </button>
        <button className="btn btn-error bg-[#EB2321] btn-sm w-[34px] h-[35px] rounded-[3px]">
          <div className="text-[14px] text-white">2</div>
        </button>
        <button className="btn btn-error bg-[#EB2321] btn-sm w-[54px] h-[35px] rounded-[3px]">
          <FaChevronRight className="text-white h-[13px]" />
        </button>
      </div>
    </div>
  );
};
