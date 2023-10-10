import PhoneField from "@/components/PhoneField/PhoneField";
import PasswordField from "@/components/PasswordField/PasswordField";
import TextField from "@/components/TextField/TextField";
import CheckboxField from "@/components/CheckboxField/CheckboxField";

export default function Form({
                               formFields,
                               buttonText,
                               register,
                               errors,
                               handleSubmit,
                               onError,
                               onSubmit,
                               // error,
                               getValues,
                             }) {

  return (
    <form
      className="w-[320px] mx-auto mb-[37px] py-[13px] form"
      onSubmit={ handleSubmit( onSubmit, onError ) }
    >
      {
        formFields.map( (item, index) => {
          switch( item.type ) {
            case( "phone" ):
              return (
                <PhoneField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, введите телефон",
                    maxLength: {
                      value: 12,
                      message: "Должно быть не более 12 знаков",
                    },
                    pattern: {
                      value: /[+0-9]{12}/,
                      message: "Пожалуйста, введите валидный телефон вида: +79278421489",
                    }
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
                />
              );

            case( "password" ):
              return (
                <PasswordField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, введите пароль",
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
                  // errorPassword={ error.password }
                />
              );

            case( "confirmPasword" ):
              return (
                <PasswordField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, повторите пароль",
                    validate: (value) => value === getValues( "password" ),
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
                  // errorConfirm={ error.confirm }
                />
              );

            case( "text" ):
              return (
                <TextField
                  item={ item }
                  key={ `${ item.name }-${ index }` }
                />
              );

            case( "checkbox" ):
              return (
                <CheckboxField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, отметьте это поле",
                  } ) }
                  key={ `${ item.name }-${ index }` }
                />
              );

            default:
              return null;
          }

        } )
      }
      <button
        type="submit"
        className="button w-[319px] h-[62px] bg-gradient-to-r from-my-orange-100 to-my-orange-50 hover:bg-gradient-to-l"
      >
        { buttonText }
      </button>
    </form>
  );
}