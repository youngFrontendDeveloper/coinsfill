export const apiLogin = async(url, data) => {
  try {
    const response = await fetch( url, {
      method: "POST",
      body: JSON.stringify( {
        email: "my-mail@mail.ru",
        password: data.password,
      } )
    } );

    const result = await response.json();
    console.log( result );

    if( result.ok ) {
      localStorage.setItem( "token", result.token );

    }

    return result;
  } catch( err ) {
    console.log( err );
  }

};