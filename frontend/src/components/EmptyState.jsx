function EmptyState({ title }) {

  return (

    <div
      className="
        bg-white
        shadow-lg
        rounded-xl
        p-10
        text-center
      "
    >

      <h2 className="text-2xl font-bold text-gray-500">
        {title}
      </h2>

    </div>
  );
}

export default EmptyState;