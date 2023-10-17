import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <Link href="/login" className="login w-[24px] h-[24px] cursor-pointer hover:drop-shadow-[0_0_1px_rgba(72,22,212,0.5)]" title="Войти">
     <Image src="/images/login-icon.svg" width={ 24 } height={ 24 } alt="Вход" />
    </Link>
  );
}