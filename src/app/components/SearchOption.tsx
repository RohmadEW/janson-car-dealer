import Image from "next/image";

export default function SearchOption() {
  return (
    <div className="w-[248px] shadow-lg">
      <Header />
      <Form />
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
    <div className="px-[22px] py-[24px] space-y-[16px]">
      <select className="app-select">
        <option>Art</option>
      </select>
      <select className="app-select">
        <option>Model</option>
      </select>
      <select className="app-select">
        <option>Model Set</option>
      </select>
      <button className="app-btn-red  w-full">RESET ALL</button>
    </div>
  );
};
