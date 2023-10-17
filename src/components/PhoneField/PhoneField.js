import Image from "next/image";

export default function PhoneField({ item, register, errors, }) {

  return (
    <div className="form__item flex-col">
      <label htmlFor="phone" className="form__label" >{ item.label }</label>
      <input
        id="phone"
        type="text"
        placeholder={ item.placeholder }
        { ...register }
        className="form__input mb-[7px]"
      />
      <Image src="/images/phone-icon.svg" width={ 18 } height={ 18 } alt="Телефон" className="form__input-icon" title="Ввести телефон"/>
      { errors && <p className="text-red-500 text-[14px]">{ errors.message }</p> }
    </div>
  );
}