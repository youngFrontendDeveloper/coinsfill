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

// import { useRouter } from "next/navigation";
// import BreadCrumbsOld from "@/components/BreadCrumbsOld/BreadCrumbsOld";
// import Button from "@/components/Button/Button";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
//
// export default function ProfilePage() {
//   const [ buttonText, setButtonText ] = useState( "Выберите файл" );
//   const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm( {
//     mode: "onTouched",
//   } );
//
//   return (
//     <div className="">
//       <BreadCrumbsOld />
//       <h1 className="mb-[37px] text-[26px] font-bold text-center leading-[32px]">Загрузка аватара</h1>
//       <p className="mb-[43px] text-[14px] font-medium text-left leading-[17px]">Загрузите файл размером до 5Мб<br />
//         По формату: JPG, PNG, GIF</p>
//       <form method="post" encType="multipart/form-data">
//         <label
//           className="input-file"
//         >
//           <input type="file" name="file" />
//           <span>{ buttonText }</span>
//         </label>
//       </form>
//       {
//
//       }
//
//     </div>
//   );
// }

// ******************************************
{/*<form action="">*/
}
{/*  <label >*/
}
{/*    <input*/
}
{/*      className="input-file"*/
}
{/*      type="file"*/
}
{/*      id="images"*/
}
{/*      accept="image/*"*/
}
{/*      required*/
}
{/*    />*/
}
{/*  </label>*/
}
{/*</form>*/
}

{/*<input*/
}
{/*  type="file"*/
}
{/*  className="button w-[375px] h-[65px] bg-gradient-to-r from-violet-100 to-violet-50 hover:bg-gradient-to-l cursor-pointer"*/
}
{/*/>*/
}

