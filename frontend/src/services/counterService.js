import api from "./api";

export const getCounters =
  async () => {

    const response =
      await api.get("/counters");

    return response.data;
};