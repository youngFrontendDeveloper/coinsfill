import Link from "next/link";
import { useState } from "react";

export default function CheckboxField({ item, register, errors, }) {
  const [ checked, setChecked ] = useState( true );

  const handleClickCheckbox = () => {
    if( checked ) {
      setChecked( false );
    } else {
      setChecked( true );
    }
  };

  return (
    <>
      <div
        className="form__item flex-wrap items-start gap-x-[18px] gap-y-[7px] mb-[28px]"
      >
        <input
          type="checkbox"
          name={ item.name }
          id={ item.name }
          { ...register }
          className="checkbox"
          defaultChecked={ checked }
        />
        <p
          className="custom-checkbox"
          onClick={ handleClickCheckbox }
        >
          {
            checked &&
            <span className="custom-check" />
          }
        </p>

        <label
          htmlFor={ item.name }
          className="w-[237px] text-white text-[12px] font-medium leading-[14.63px] cursor-pointer"
          onClick={ handleClickCheckbox }
        >
          Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с&nbsp;
          <Link href="/" className="underline text-link-blue-100 hover:hover:text-my-orange-100">
            Условиями Соглашения!
          </Link>&nbsp;
          Правилами и политикой конфиденциальности компании
        </label>
        { !checked && (
          <div className="w-full text-red-500 text-[14px]">Пожалуйста, отметьте это поле</div>
        ) }
      </div>

    </>
  );
}