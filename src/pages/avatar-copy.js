import { useState } from "react";
import Image from "next/image";
import { setAvatar } from "@/services/setAvatar";
import Button from "@/components/Button/Button";
import Draggable from "react-draggable";

export default function UploadingAvatarPage() {
  const [ file, setFile ] = useState( null );
  const [ base64, setBase64 ] = useState( null );
  const [ isSuccess, setIsSuccess ] = useState( false );
  const [ message, setMessage ] = useState( "" );

  console.log( file );

  // Convert a file to base64 string
  const toBase64 = (file) => {
    return new Promise( (resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL( file );

      fileReader.onload = () => {
        resolve( fileReader.result );
      };

      fileReader.onerror = (error) => {
        reject( error );
      };
    } );
  };

  const onFileChange = async(e) => {
    if( !e.target.files ) {
      return;
    }

    if( e.target.files[ 0 ].size > 625000 ) {
      const size = ( e.target.files[ 0 ].size / 1048576 ).toFixed( 2 );
      setMessage( `Размер файла ${ size }Мб превышает 5Мб` );
      e.target.value = "";
      setBase64( null );
      return;
    }

    if( e.target.files[ 0 ].type !== "image/jpeg" && e.target.files[ 0 ].type !== "image/png" && e.target.files[ 0 ].type !== "image/gif" ) {
      setMessage( "Формат файла должен быть JPG/JPEG, PNG или GIF" );
      e.target.value = "";
      setBase64( null );
      return;
    }

    setFile( e.target.files[ 0 ] );
    setMessage( "" );
    const base64 = await toBase64( e.target.files[ 0 ] );
    setBase64( base64 );

  };

  const handleReset = () => {
    setFile( null );
    setBase64( null );
  };

  // const onClick = (e) => {
  //   e.currentTarget.value = "";
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if( !file ) {
      return;
    }
    const type = file.type;
    const response = await setAvatar( base64, type );
    // const response = await setAvatar(base64)


    // const result = await response.json()
    console.log( response );

    // if(result.ok){
    //   setIsSuccess(true)
    //   setFile( null );
    //   setBase64( null );
    // }

    // const base64 = await toBase64( file );
    // setBase64( base64 );

    // await fetch( "https://test-task.test211.workers.dev/account/image", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": file.type,
    //     "token-tt": localStorage.getItem( "token" ),
    //   },
    //   body: JSON.stringify( { image: base64 } )
    // } );

    // setFile( null );
    // setBase64( null );
  };
  return (
    <div className="w-[400px] mx-auto">
      {
        !file ?
          <>
            <h1 className="mb-[37px] text-[26px] font-bold text-center leading-[32px]">Загрузка аватара</h1>
            <p className="mb-[43px] text-[14px] font-medium text-left leading-[17px]">Загрузите файл размером до
              5Мб<br />
              По формату: JPG, PNG, GIF</p>
          </> :
          <>
            <h2 className="mb-[37px] text-[26px] font-bold text-center leading-[32px]">Фото для аватарки</h2>
          </>
      }

      <form method="POST" encType="multipart/form-data" onSubmit={ handleSubmit }>

        {
          !file ?
            <>
              <label
                className="input-file mb-[30px]"
              >
                <input
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg, image/gif"
                  onChange={ onFileChange }
                  // onClick={ onClick }

                />
                <span className="input-file-btn">
            <Image
              src="/images/download-icon.svg" width={ 15 } height={ 18 } alt="Загрузить" className="ml-[105px] mr-[8px]"
            />
            Выбрать файл</span>
              </label>
              {
                message && <p className="text-red-500 text-[14px]">{ message }</p>
              }
            </> :
            <>
              { base64 && (
                <div className="relative flex justify-center items-center w-[375px] h-[198px] rounded-[12px] bg-grey-50 overflow-hidden">
                    <Draggable>
                      <Image
                        src={ base64 } fill alt="Uploaded Image" className="drop-img" objectFit="cover"
                      />
                    < /Draggable>
                  <div className="absolute top-[14px] right-[105px] bottom-[20px] left-[105px] rounded-[50%] shadow-[0_0_0_600_grba(0, 0, 0, .5)]  overflow-hidden ">
                  </div>
                </div>

                // <div className="flex justify-center items-center w-[375px] h-[198px] rounded-[12px] bg-grey-50">
                //   <div className="relative w-[164px] h-[164px] rounded-[50%] bg-grey-50 overflow-hidden">
                //     <Draggable>
                //       <Image
                //         src={ base64 } fill alt="Uploaded Image" className="drop-img" objectFit="cover"
                //       />
                //     < /Draggable>
                //   </div>
                // </div>
              ) }

              <button
                className="button w-[375px] h-[65px] mb-[11px] text-white bg-gradient-to-r from-violet-100 to-violet-50 hover:bg-gradient-to-l shadow-[0_4px_20px_0] shadow-violet-50/50"
                type="submit"
              >
                Сохранить
              </button>
              <button
                type="reset"
                onClick={ handleReset }
                className="button w-[375px] h-[65px] mb-[66px] text-black-100 bg-gradient-to-r from-violet-10 to-violet-20 hover:bg-gradient-to-l shadow-[0_4px_20px_0] shadow-violet-50/50"
              >
                Отменить
              </button>
              { isSuccess && <p className="text-[14px]">Ваш аватар успешно загружен</p> }
            </>
        }

      </form>

    </div>
  );
}

