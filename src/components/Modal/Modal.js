// import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";
import { useCallback, useEffect, useRef } from "react";
import Close from "@/components/Close/Close";

export default function Modal({ onClose, children, title }) {
  // const modalWrapperRef = useRef();

  const backDropHandler = useCallback( e => {

    if( e.target.className==="modal-overlay" ) {
      onClose();
    }
  }, [ onClose ] );

  useEffect( () => {
    setTimeout( () => {
      window.addEventListener( "click", backDropHandler );
    } );
  }, [ backDropHandler ] );

  useEffect( () => {
    return () => window.removeEventListener( "click", backDropHandler );
  }, [ backDropHandler ] );

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div  className="modal-overlay">
      <div
        // ref={ modalWrapperRef }
        className="modal-wrapper">
        <div className="modal">
          <div className="absolute top-[-9px] right-[-9px] ">
            <Close onClick={ handleCloseClick } />
          </div>
          <h1 className="mb-[40px] text-white text-[26px] font-bold leading-[31.69px] text-center">{ title }</h1>
          { children }
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById( "modal-root" )
  );
}


// "use client";
//
// import styles from "./Modal.module.scss";
// import { useCallback, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
//
// export default function Modal({ children }) {
//   const overlay = useRef( null );
//   const wrapper = useRef( null );
//   const router = useRouter();
//
//   const onDismiss = useCallback( () => {
//     router.back();
//   }, [ router ] );
//
//   const onClick = useCallback( (e) => {
//     if( e.target === overlay.current || e.target === wrapper.current ) {
//       if( onDismiss ) {
//         onDismiss();
//       }
//     }
//   }, [ onDismiss, overlay, wrapper ] );
//
//   const onKeyDown = useCallback( (e) => {
//     if( e.key === "Escape" ) {
//       onDismiss();
//     }
//   }, [ onDismiss ] );
//
//   useEffect( () => {
//     document.addEventListener( "keydown", onKeyDown );
//     return () => document.removeEventListener( "keydown", onKeyDown );
//   }, [ onKeyDown ] );
//
//   return (
//     <div
//       className={ styles.modal }
//       ref={ overlay }
//       onClick={ onClick }
//     >
//       <div
//         className={styles.wrapper}
//         ref={wrapper}>
//         { children }
//       </div>
//     </div>
//   );
// }