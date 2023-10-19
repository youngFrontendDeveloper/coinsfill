import Image from "next/image";

export default function Search() {
  return (
    <div className="w-[17px] h-[17px] cursor-pointer">
      <Image src="/images/search-icon.svg" width={17} height={17} alt="Поиск" title="Поиск"/>
    </div>
  );
}