function PredictionCard({
  title,
  value,
}) {

  return (
    <div className="bg-white shadow-xl rounded-xl p-6">

      <h2 className="text-gray-500 text-lg">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-4 text-blue-600">
        {value}
      </p>

    </div>
  );
}

export default PredictionCard;