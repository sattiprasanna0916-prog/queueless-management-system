import api from "./api";

export const getQueues = async () => {
  return await api.get("/queues");
};

export const createQueue = async (data) => {
  return await api.post("/queues", data);
};