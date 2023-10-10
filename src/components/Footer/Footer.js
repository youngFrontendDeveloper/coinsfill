import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-[80px] footer">
      <div className="footer__container ">

        <Link href="/" className="footer__item">
          <Image src="/images/home-icon.svg" width={ 26 } height={ 24 } alt="Главная" />
          <span className="footer__text">ראשי</span>
        </Link>

        <Link href="/cards" className="footer__item">
          <Image src="/images/payment-icon.svg" width={ 21 } height={ 17 } alt="Карты" />
          <span className="footer__text">מפות</span>
        </Link>

        <Link href="/remittance" className="footer__item pt-[7px]">
          <Image src="/images/arrow-icon.svg" width={ 14 } height={ 19 } alt="Переводы" />
          <span className="footer__text">תרגומים</span>
        </Link>

        <Link href="/fundraising" className="footer__item">
          <Image src="/images/fundraising-icon.svg" width={ 22 } height={ 20 } alt="Сбор средств" />
          <span className="footer__text">גיוס כספים</span>
        </Link>

      </div>
    </footer>
  );
}