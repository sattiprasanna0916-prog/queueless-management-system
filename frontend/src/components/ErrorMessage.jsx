function ErrorMessage({ message }) {

  return (

    <div
      className="
        bg-red-100
        border
        border-red-500
        text-red-700
        px-4
        py-3
        rounded-xl
      "
    >
      {message}
    </div>
  );
}

export default ErrorMessage;