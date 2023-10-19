import PhoneField from "@/components/PhoneField/PhoneField";
import PasswordField from "@/components/PasswordField/PasswordField";
import TextField from "@/components/TextField/TextField";
import CheckboxField from "@/components/CheckboxField/CheckboxField";
import Button from "@/components/Button/Button";

export default function Form({
                               formFields,
                               buttonText,
                               register,
                               errors,
                               handleSubmit,
                               onError,
                               onSubmit,
                               error,
                               getValues,
                               type,
                               width,
                               height,
                               btnClass,
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
                      message: "Должно быть не более 12 символов",
                    },
                    pattern: {
                      value: /[+0-9]{12}/,
                      message: "Пожалуйста, введите валидный номер телефона вида: +79278421489 без пропусков и тире",
                    }
                  } ) }
                  errors={ errors[ item.name ] }
                  // errorPhone={ error.phone }
                  key={ `${ item.name }-${ index }` }
                />
              );

            case( "password" ):
              return (
                <PasswordField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, введите пароль не менее 5 символов",
                    minLength: {
                      value: 5,
                      message: "Должно быть не менее 5 символов",
                    },
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
                  errorPassword={ error.password }
                />
              );

            case( "confirmPassword" ):
              return (
                <PasswordField
                  item={ item }
                  register={ register( `${ item.name }`, {
                    required: "Пожалуйста, повторите пароль",
                    validate: (value) => value === getValues( "password" ),
                  } ) }
                  errors={ errors[ item.name ] }
                  key={ `${ item.name }-${ index }` }
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
      <Button
        type={ type }
        width={ width }
        height={ height }
        buttonText={ buttonText }
        btnClass={ btnClass }
      />
    </form>
  );
}