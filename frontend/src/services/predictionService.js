import api from "./api";

export const getPrediction =
  async () => {

    const response =
      await api.get("/prediction");

    return response.data;
};