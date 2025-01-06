import { http } from "@/utils/http";

type Result = {
  data: Array<any>;
};

export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/back-api/menu/getAsyncRoutes");
};
