import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return(
    <div className="w-[93px] cursor-pointer" title="Логотип">
    <Link href="/" className="flex justify-between">
      <Image src="/images/logo-icon.svg" width={30} height={47} alt="Логотип" />
      <p className="pt-[28px] text-logo-blue-100 text-[12px] font-bold leading-[15px] text-left ">СoinsFill</p>
    </Link>
    </div>
  )
}


