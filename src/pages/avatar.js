import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { setAvatar } from "@/services/setAvatar";
import AvatarEditor from "react-avatar-editor";
import { useRouter } from "next/navigation";
import { authContext } from "@/context/authContext";

export default function UploadingAvatarPage() {
  const [ file, setFile ] = useState( null );
  const [ messageSaving, setMessageSaving ] = useState( "" );
  const [ messageErr, setMessageErr ] = useState( "" );
  const { auth } = useContext( authContext );
  const router = useRouter();
  const editorRef = useRef( null );
  console.log( file );

  const onFileChange = async(e) => {
    if( !e.target.files ) {
      return;
    }

    if( e.target.files[ 0 ].size > 625000 ) {
      const size = ( e.target.files[ 0 ].size / 1048576 ).toFixed( 2 );
      setMessageErr( `Размер файла ${ size }Мб превышает 5Мб. Выберите другой файл` );
      e.target.value = "";
      setFile( null );
      return;
    }

    if( e.target.files[ 0 ].type !== "image/jpeg" && e.target.files[ 0 ].type !== "image/png" && e.target.files[ 0 ].type !== "image/gif" ) {
      setMessageErr( "Формат файла должен быть JPG/JPEG, PNG или GIF" );
      e.target.value = "";
      setFile( null );
      return;
    }

    setFile( e.target.files[ 0 ] );
    setMessageErr( "" );

  };

  const handleReset = () => {
    setFile( null );
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if( !file ) {
      return;
    }
    const type = file.type;
    const cropImg = editorRef.current.getImage();

    const base64 = cropImg.toDataURL( "image/*" );

    const response = await setAvatar( base64, type );

    if( response.ok ) {
      setMessageSaving( "Изображение сохранено" );
      setTimeout( () => {
        setMessageSaving( "" );
        router.push( "/profile" );
      }, 3000 );
    } else {
      setMessageSaving( "Произошла ошибка. Изображение не сохранено" );
      setTimeout( () => {
        setMessageSaving( "" );
      }, 3000 );
    }

  };

  useEffect( () => {
    if( !auth ) {
      router.push( "/login" );
    }
  } );

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

                />
                <span className="input-file-btn">
            <Image
              src="/images/download-icon.svg" width={ 15 } height={ 18 } alt="Загрузить" className="ml-[105px] mr-[8px]"
            />
            Выбрать файл</span>
              </label>
              {
                messageErr && <p className="text-red-500 text-[14px]">{ messageErr }</p>
              }
            </> :
            <>
              { file && (
                <div
                  className="relative flex justify-center mb-[32px] items-center w-[375px] h-[198px] rounded-[12px] bg-grey-50 overflow-hidden"
                >
                  <AvatarEditor
                    ref={ editorRef }
                    image={ file }
                    width={ 163 }
                    height={ 163 }
                    borderRadius={ 83 }
                    border={ 0 }
                    color={ [ 243, 245, 245, 1 ] } // RGBA
                    scale={ 1 }
                    rotate={ 0 }
                    className="crop"
                  />

                </div>

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
              { messageSaving && <p className="text-[14px]">{ messageSaving }</p> }
            </>
        }

      </form>

    </div>
  );
}

