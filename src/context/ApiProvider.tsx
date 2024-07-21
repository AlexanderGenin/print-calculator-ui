import { createContext, useContext, useMemo } from "react";
import { ApiClient } from "../api/ApiClient";

const ApiContext = createContext<ApiClient | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const apiClient = useMemo(
    () => new ApiClient("http://print-robot.ru/api/v1"),
    []
  );

  return (
    <ApiContext.Provider value={apiClient}>{children}</ApiContext.Provider>
  );
}

export function useApi() {
  const context = useContext(ApiContext);
  if (context === null) {
    throw new Error("useAPI must be used within an ApiProvider");
  }
  return context;
}
