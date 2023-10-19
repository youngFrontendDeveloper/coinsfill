import { createContext, useCallback, useMemo, useState } from "react";
import { apiLogin } from "@/services/apiLogin";
import { useRouter } from "next/navigation";




export const authContext = createContext( {
  auth: false,
  login: () => {
  },
} );

export function AuthProvider({ children }) {
  const [ auth, setAuth ] = useState( false );
  const router = useRouter();

  const login = useCallback( async(url, data) => {
    const res = await apiLogin( url, data );
    console.log(res);
    console.log( res.ok );
    setAuth( res.ok );

    if( auth  ) {
      router.push( "/profile" );
    } else {
      router.replace( "/login" );
    }

  },[auth]  );

  const value = useMemo( () => {
    return {
      auth,
      login,
    };
  }, [ auth, login ] );

  return <authContext.Provider value={ value }>{ children }</authContext.Provider>;

}