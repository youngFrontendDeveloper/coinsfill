import Link from "next/link";
import Breadcrumbs from "@/components/BreadCrumbs/Breadcrumbs";
import { useRouter } from "next/navigation";
import { authContext } from "@/context/authContext";
import { useContext, useEffect, useState } from "react";
import { getAvatar } from "@/services/getAvatar";
import Image from "next/image";


export default function ProfilePage() {
  const [ avatar, setAvatar ] = useState( null );
  const router = useRouter();
  const { auth } = useContext( authContext );

  console.log( auth );

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

  useEffect( () => {
    if( auth === false ) {
      router.push( "/login" );
    }

  }, [] );

  useEffect( () => {
    async function f() {
      const response = await getAvatar();
      setAvatar( response.image );
    }

    f();
  }, [] );


  return (
    <div className="">
      {/*<Breadcrumbs items={ breadCrumbs } />*/ }
      <h1 className="mb-[37px] text-[26px] font-bold text-center leading-[32px]">Профиль пользователя</h1>
      <div className="block w-[100px] h-[100px] rounded-[50%] overflow-hidden">
        {
          avatar ? <Image
              src={ avatar }
              width={ 100 }
              height={ 100 }
              alt="Аватар"
              loading="lazy"
            />
            : null
        }
      </div>
      <Link href="/avatar" className="text-[18px] font-medium underline text-link-blue-100 hover:text-my-orange-100">
        Изменить аватар
      </Link>
    </div>
  );
}


