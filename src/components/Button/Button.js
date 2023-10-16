export default function Button({ buttonText, width, height, btnClass, onClick }) {
  return (
    <button
      type="submit"
      className={ `button w-[319px] h-[62px] text-white bg-gradient-to-r ${ btnClass } hover:bg-gradient-to-l` }
      onClick={ onClick }

    >
      { buttonText }
    </button>
  );
}

// className="button w-[319px] h-[62px] bg-gradient-to-r from-my-orange-100 to-my-orange-50 hover:bg-gradient-to-l"