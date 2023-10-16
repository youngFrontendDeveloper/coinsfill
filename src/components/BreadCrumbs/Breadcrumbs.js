import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Breadcrumbs.module.scss"
import Crumb from "./Crumb";
import { useEffect, useState } from "react";
import { breadCrumbs } from "@/utils/breadCrumbs.js";
import Image from "next/image";


export default function Breadcrumbs({ items }) {
  const [ breadcrumbs, setBreadcrumbs ] = useState( null );
  const router = useRouter();
  console.log(router);
  const path = router.pathname;
  const linkPath = router.asPath.split( "/" );

  useEffect( () => {
    if( router ) {
      linkPath.shift();
      const pathArray = linkPath.map( (path, i) => {

        const label = path ? ( breadCrumbs.find( (item) => item.path === path ) ).label :
          ( <Image src="/images/home-icon.svg" height={ 24 } width={ 24 } alt="Домой" /> );

        return {
          label: label,
          href: "/" + linkPath.slice( 0, i + 1 ).join( "/" )
        };
      } );
      setBreadcrumbs( pathArray );
    }
  }, [ router ] );

  if( !breadcrumbs ) {
    return null;
  }

  return (
    <>
      { path !== "/" && (
        <div className={ styles.breadcrumbs }>
          <li className={ styles[ "breadcrumbs__item" ] }>
            <Link href="/" className={ styles[ "breadcrumbs__link" ] } title="Домой"> <Image
              src="/images/home-icon.svg" height={ 24 } width={ 24 } alt="Домой"
            /></Link>
            <span className={ styles[ "breadcrumbs__span" ] }> / </span>
          </li>

          {
            breadcrumbs.map( (crumb, i) => {
              return <Crumb
                key={ i }
                crumb={ crumb }
                items={ breadcrumbs }
                i={ i }
              />;
            } )
          }
        </div>
      )
      }
    </>
  );
}