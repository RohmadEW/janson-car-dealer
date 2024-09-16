import Main from "./components/Main";

export default function Home() {
  return (
    <div>
      <div className="bg-[#1B232F] w-[100wh] h-[160px]"></div>
      <div className="flex justify-center p-[32px] min-h-[calc(100vh-160px-148px)]">
        <Main />
      </div>
      <div className="bg-[#1B232F] w-[100wh] h-[148px]"></div>
    </div>
  );
}
