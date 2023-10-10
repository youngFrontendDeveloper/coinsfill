import Image from "next/image";

export default function Login() {
  return (
    <div className="w-[24px] h-[24px] cursor-pointer">
      <Image src="/images/login.svg" width={24} height={24} alt="Вход" />
    </div>
)
}