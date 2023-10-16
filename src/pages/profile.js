import Link from "next/link";
import Breadcrumbs from "@/components/BreadCrumbs/Breadcrumbs";


export default function ProfilePage() {
  const breadCrumbs = [
    {
      title: "Главная",
      src: "/"
    },
    {
      title: "Настройки аккаунта",
      src: "/profile"
    },
  ];

  return (
    <div className="">
      {/*<Breadcrumbs items={ breadCrumbs } />*/}
      <h1 className="mb-[37px] text-[26px] font-bold text-center leading-[32px]">Профиль пользователя</h1>
      <p className="text-[24px] text-red-500">Реализована только возможность загрузить аватар!!!</p>
      <Link href="/avatar" className="text-[18px] font-medium">Загрузка аватара</Link>
    </div>
  );
}


