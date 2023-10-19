export default function Button({ type, buttonText, width, height, btnClass, onClick }) {
  return (
    <button
      type={ type }
      className={ `${ btnClass } button bg-gradient-to-r  hover:bg-gradient-to-l` }
      onClick={ onClick }
      style={ { width: width, height: height } }
    >
      { buttonText }
    </button>
  );
}
