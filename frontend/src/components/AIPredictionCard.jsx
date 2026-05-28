function AIPredictionCard() {

  const predictedTime = "12 mins";

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700
      text-white rounded-xl shadow-xl p-6">

      <h2 className="text-2xl font-bold">
        AI Waiting Prediction
      </h2>

      <p className="mt-4 text-5xl font-bold">
        {predictedTime}
      </p>

      <p className="mt-3 text-blue-100">
        Estimated waiting time based on queue history
      </p>

    </div>
  );
}

export default AIPredictionCard;