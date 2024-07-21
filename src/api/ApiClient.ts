import { Laminate } from "../types/types";

type ApiResponse<T> = T & {
  errorTraceId?: string;
  title?: string;
  details?: string;
};

export class ApiClient {
  constructor(private baseURL: string) {}

  private async fetchData<T>(endpoint: string): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url);
      const data: ApiResponse<T> = await response.json();
      if (data.errorTraceId) {
        throw new Error(`${data.title}: ${data.details}`);
      }
      return data;
    } catch (error: any) {
      throw new Error(`API error: ${error.message}`);
    }
  }

  getLaminates() {
    return this.fetchData<Laminate[]>("/catalog/laminates");
  }

  getLaminateTypes() {
    return this.fetchData("/catalog/laminates/types");
  }

  getLaminatesThickness() {
    return this.fetchData("/catalog/laminates/thickness");
  }

  getPapers() {
    return this.fetchData("/catalog/papers");
  }

  getPapersDensities() {
    return this.fetchData("/catalog/papers/densities");
  }

  getPapersTypes() {
    return this.fetchData("/catalog/papers/types");
  }

  getBoxes() {
    return this.fetchData("/catalog/boxes");
  }

  getMaterialTypes() {
    return this.fetchData("/catalog/dictionaries/material-types");
  }

  getPrintFormats() {
    return this.fetchData("/catalog/dictionaries/print-formats");
  }

  getPapersFactures() {
    return this.fetchData("/catalog/dictionaries/papers-factures");
  }

  getPapersColors() {
    return this.fetchData("/catalog/dictionaries/papers-colors");
  }
}
