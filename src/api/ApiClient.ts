import { PackInBoxRequestDto, PackInBoxResponseDto } from "../types/dto";
import {
  IBox,
  ILaminate,
  MaterialType,
  IPaper,
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

  private async fetchData<T>(
    endpoint: string,
    fetchParams?: RequestInit
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    try {
      const response = await fetch(url, fetchParams);
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
    return this.fetchData<IPaper[]>("/catalog/papers");
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
    return this.fetchData<ILaminate[]>("/catalog/laminates");
  }

  getLaminateThicknesses() {
    return this.fetchData<number[]>("/catalog/laminates/thicknesses");
  }

  getBoxes() {
    return this.fetchData<IBox[]>("/catalog/boxes");
  }

  postPackInBox(body: PackInBoxRequestDto) {
    return this.fetchData<PackInBoxResponseDto>(
      "/calculations/algo/circulation/pack-in-box",
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );
  }
}
