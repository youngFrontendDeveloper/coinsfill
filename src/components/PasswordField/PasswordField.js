import Image from "next/image";
import { useState } from "react";

export default function PasswordField({ item, register, errors, errorPassword, errorConfirmPassword }) {
  const [ type, setType ] = useState( "password" );
  const handleClickPasswordIcon = () => {
    if( type === "password" ) {
      setType( "text" );
    } else {
      setType( "password" );
    }
  };

  return (
    <div className="form__item flex-col">
      <label htmlFor="password" className="form__label">{ item.label }</label>
      <input
        type={ type }
        placeholder={ item.placeholder }
        className="form__input mb-[7px]"
        { ...register }
      />
      <Image
        src="/images/pass-icon.svg" width={ 16 } height={ 21 } alt="Пароль" className="form__input-icon"
        title="Ввести пароль"
      />
      <Image
        onClick={ handleClickPasswordIcon }
        src="/images/eye-icon.svg"
        width={ 15 }
        height={ 12 }
        alt="Показать пароль"
        className="absolute top-[46px] right-[18px] mb-[10px] cursor-pointer"
        title="Показать пароль"
      />
      { errors && (
        <div className="text-red-500 text-[14px]">{ errors.message }</div>
      ) }
      { errors &&
        errors.type === "validate" && (
          <div className="text-red-500 text-[14px]">Пароли не совпадают</div>
        ) }
      {
        errorPassword && <p className="text-red-500 text-[14px]">{ errorPassword }</p>
      }
      {
        errorConfirmPassword && <p className="text-red-500 text-[14px]">{ errorConfirmPassword }</p>
      }

    </div>
  );
}