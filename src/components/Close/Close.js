import Image from "next/image";

export default function Close({onClick}) {
  return (
    <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[50%] bg-my-orange-50 cursor-pointer" title="Закрыть окно" onClick={onClick}>
      <Image src="/images/close-icon.svg" width={ 15 } height={ 15 } alt="Закрыть" />
    </div>
  );
}