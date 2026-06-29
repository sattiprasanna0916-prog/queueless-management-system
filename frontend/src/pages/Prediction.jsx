import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PredictionCard from "../components/PredictionCard";

function Prediction() {

  const [peopleAhead, setPeopleAhead] =
    useState("");

  const [avgServiceTime, setAvgServiceTime] =
    useState("");

  const [predictionData, setPredictionData] =
    useState(null);

  const getPrediction = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8080/api/prediction",
        {
          peopleAhead:
            Number(peopleAhead),

          avgServiceTime:
            Number(avgServiceTime),
        }
      );

      setPredictionData(
        response.data
      );

    } catch (error) {

      console.log(error);

    }
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

          <div className="bg-white shadow-xl rounded-xl p-8 mb-8">

            <input
              type="number"
              placeholder="People Ahead"
              value={peopleAhead}
              onChange={(e) =>
                setPeopleAhead(e.target.value)
              }
              className="border p-2 rounded w-full mb-4"
            />

            <input
              type="number"
              placeholder="Average Service Time"
              value={avgServiceTime}
              onChange={(e) =>
                setAvgServiceTime(
                  e.target.value
                )
              }
              className="border p-2 rounded w-full mb-4"
            />

            <button
              onClick={getPrediction}
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Predict Wait Time
            </button>

          </div>

          {predictionData && (

            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<PredictionCard
  title="Estimated Wait"
  value={
    `${predictionData.estimatedWaitTime} mins`
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
    `${predictionData.averageServiceTime} mins`
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

                  Based on current queue load,
                  the system recommends

                  <span className="font-bold text-blue-600">
                    {" "}
                    {predictionData.recommendedCounter}
                  </span>

                  to reduce waiting time.

                </p>

              </div>
            </>

          )}

        </div>

      </div>

    </div>
  );
}

export default Prediction;