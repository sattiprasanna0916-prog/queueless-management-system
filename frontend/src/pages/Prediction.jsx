import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PredictionCard from "../components/PredictionCard";

function Prediction() {

  const predictionData = {

    estimatedWaitTime: "18 mins",

    peopleAhead: 6,

    averageServiceTime: "3 mins",

    recommendedCounter: "Counter 2",
  };

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            AI Waiting Time Prediction
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <PredictionCard
              title="Estimated Wait"
              value={
                predictionData.estimatedWaitTime
              }
            />

            <PredictionCard
              title="People Ahead"
              value={
                predictionData.peopleAhead
              }
            />

            <PredictionCard
              title="Avg Service Time"
              value={
                predictionData.averageServiceTime
              }
            />

            <PredictionCard
              title="Best Counter"
              value={
                predictionData.recommendedCounter
              }
            />

          </div>

          <div className="bg-white shadow-xl rounded-xl p-8 mt-10">

            <h2 className="text-2xl font-bold mb-4">
              AI Recommendation
            </h2>

            <p className="text-lg leading-8">

              Based on current queue load and
              historical service times,
              the system recommends
              assigning the next user to

              <span className="font-bold text-blue-600">
                {" "}Counter 2
              </span>

              to reduce waiting time.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Prediction;