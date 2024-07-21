import {
  Laminate,
  MaterialType,
  Paper,
  PaperColor,
  PaperFacture,
  PrintFormat,
} from "../types/types";

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

  getPapers() {
    return this.fetchData<Paper[]>("/catalog/papers");
  }

  getMaterialTypes() {
    return this.fetchData<MaterialType[]>("/dictionaries/material-types");
  }

  getPaperColors() {
    return this.fetchData<PaperColor[]>("/dictionaries/paper-colors");
  }

  getPaperFactures() {
    return this.fetchData<PaperFacture[]>("/dictionaries/paper-factures");
  }

  getPaperDensities() {
    return this.fetchData<number[]>("/catalog/papers/densities");
  }

  getPrintFormats() {
    return this.fetchData<PrintFormat[]>("/dictionaries/print-formats");
  }

  getLaminates() {
    return this.fetchData<Laminate[]>("/catalog/laminates");
  }

  getLaminateThicknesses() {
    return this.fetchData<number[]>("/catalog/laminates/thicknesses");
  }
}
