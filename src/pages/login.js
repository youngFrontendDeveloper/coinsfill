import { useContext, useState } from "react";
import Modal from "@/components/Modal/Modal";
import Form from "@/components/Form/Form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { apiLogin } from "@/services/apiLogin";
import { authContext } from "@/context/authContext";


export default function LoginPage() {
  const [ url, setUrl ] = useState( "" );
  const [ formFields, setFormFields ] = useState( [] );
  const [ showModal, setShowModal ] = useState( false );
  const [ title, setTitle ] = useState( "" );
  const [ buttonText, setButtonText ] = useState( "" );
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm( {
    mode: "onTouched",
  } );
  const [ error, setError ] = useState( {
    email: "",
    password: "",
  } );
  const { login } = useContext( authContext );

  // const router = useRouter();

  const onError = (errors, e) => console.log( errors, e );

  const handleCloseModal = () => {
    setShowModal( false );
    reset( {} );
    setError( {
      email: "",
      password: "",
    } );
  };

  const handleClickLogin = () => {
    setShowModal( true );
    setTitle( "Логин" );
    setButtonText( "Войти" );
    setUrl( "https://test-task.test211.workers.dev/login" );
    setFormFields( [
      {
        type: "phone",
        name: "phone",
        placeholder: "+7 961 825 70 55",
        label: "Ваш телефон",
        required: true,
      },
      {
        type: "password",
        name: "password",
        placeholder: "dwe3jfg6Htd",
        label: "Пароль",
        required: true,
      },
      {
        type: "text",
        name: "text",
        text: "Забыли пароль?"
      },
      {
        type: "checkbox",
        name: "checkbox",
        label: "Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с Условиями Соглашения! Правилами и политикой конфиденциальности компании",
        required: true,
      },
    ] );
  };

  const handleClickRegistration = () => {
    setShowModal( true );
    setTitle( "Регистрация" );
    setButtonText( "Зарегистрироваться" );
    setUrl( "https://test-task.test211.workers.dev/user" );
    setFormFields( [
      {
        type: "phone",
        name: "phone",
        placeholder: "+7 961 825 70 55",
        label: "Ваш телефон",
        required: true,
      },
      {
        type: "password",
        name: "password",
        placeholder: "dwe3jfg6Htd",
        label: "Пароль",
        required: true,
      },
      {
        type: "confirmPassword",
        name: "confirmPassword",
        placeholder: "dwe3jfg6Htd",
        label: "Подтвердите пароль",
        required: true,
      },
      {
        type: "checkbox",
        name: "checkbox",
        label: "Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с Условиями Соглашения! Правилами и политикой конфиденциальности компании",
        required: true,
      },
    ] );
  };

  const onSubmit = async(data) => {
    // console.log( data );
    await login( url, data );

    // const response = await fetch( url, {
    //   method: "POST",
    //   body: JSON.stringify( {
    //     email: "my-mail@mail.ru",
    //     // email: data.phone,
    //     password: data.password
    //   } )
    // } );
    // const result = await response.json();
    // console.log( result );
    //
    // if( result.ok ) {
    // localStorage.setItem( "token", result.token );
    //   router.push( "/profile" );
    // } else {
    //   setError( result.errors );
    // }


    // await apiLogin( data );
    // await mutate();
    // router.push( "/" );
    // router.back();
  };

  return (
    <div
      className="container py-[40px] flex flex-col items-center"
    >
      <h1 className="w-[375px] mb-[84px] px-[10px] text-[24px] font-bold  leading-[29.26px]">Выберите действие</h1>
      <Button
        buttonText="Login" btnClass=" mb-[20px] from-my-orange-100 to-my-orange-50" onClick={ handleClickLogin }
      />
      <Button
        buttonText="Registration" btnClass="mb-[176px] from-violet-100 to-violet-50" onClick={ handleClickRegistration }
      />
      {/*<button*/ }
      {/*  onClick={ handleClickLogin }*/ }
      {/*  className="button w-[375px] h-[65px]  mb-[20px] bg-gradient-to-r from-my-orange-100 to-my-orange-50 hover:bg-gradient-to-l "*/ }
      {/*>*/ }
      {/*  Login*/ }
      {/*</button>*/ }
      {/*<button*/ }
      {/*  onClick={ handleClickRegistration }*/ }
      {/*  className="button w-[375px] h-[65px] mb-[176px] bg-gradient-to-r from-violet-100 to-violet-50 hover:bg-gradient-to-l "*/ }
      {/*>*/ }
      {/*  Registration*/ }
      {/*</button>*/ }

      {
        showModal && <Modal
          onClose={ handleCloseModal }
          title={ title }
        >
          <Form
            formFields={ formFields }
            register={ register }
            errors={ errors }
            handleSubmit={ handleSubmit }
            onSubmit={ onSubmit }
            onError={ onError }
            getValues={ getValues }
            error={ error }
            buttonText={ buttonText }
          />

        </Modal>
      }

    </div>
  );
}
