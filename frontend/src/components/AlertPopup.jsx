function AlertPopup({ message }) {

  return (
    <div
      className="
        fixed
        top-5
        right-5
        bg-green-500
        text-white
        px-6
        py-4
        rounded-xl
        shadow-xl
      "
    >
      {message}
    </div>
  );
}

export default AlertPopup;