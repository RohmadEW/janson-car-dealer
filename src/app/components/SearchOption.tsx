import Image from "next/image";

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
      <div>
        <div className="flex items-center justify-between">
          <div className="text-[14px]">Mileage</div>
          <div className="text-[14px]">0mi — 500000mi</div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="text-[14px]">Price</div>
          <div className="text-[14px]">$0 — $300 000</div>
        </div>
      </div>
      <button className="app-btn-red w-full">RESET ALL</button>
    </div>
  );
};
