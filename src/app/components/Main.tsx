import Content from "./Content";
import SearchOption from "./SearchOption";

export default function Main() {
  return (
    <div className="flex gap-[30px] mt-[90px] mb-[116px]">
      <SearchOption />
      <Content />
    </div>
  );
}
