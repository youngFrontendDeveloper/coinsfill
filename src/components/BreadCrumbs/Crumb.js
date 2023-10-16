import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

export default function Crumb({ crumb, items, i }) {
  const isLastItem = i === items.length - 1;

  if( !isLastItem ) {
  return (
    <li>
      <Link
        href={ crumb.href }
        key={ i }
        className={ styles[ "breadcrumbs__link" ] }
      >
        { crumb.label }
      </Link>

      <span  className={ styles[ "breadcrumbs__span" ] }> / </span>
    </li>
  );
  }
  else {
    return (
    <li  className={ styles[ "breadcrumbs__item" ] }>{crumb.label} </li>
    )
  }

}