export interface ILaminate {
  id: number;
  article: string;
  caption: string;
  typeId: number;
  length: number;
  width: number;
  thickness: number;
  weight: number;
}

export interface IPaper {
  id: number;
  article: string;
  caption: string;
  typeId: number;
  colorId: number;
  factureId: number;
  width: number;
  height: number;
  thickness: number;
  density: number;
  sides: string;
}

export interface PrintFormat {
  id: number;
  caption: string;
}

export interface PaperFacture {
  id: number;
  caption: string;
}

export interface PaperColor {
  id: number;
  caption: string;
}

export interface MaterialType {
  id: number;
  caption: string;
}

export interface IBox {
  id: number;
  article: string;
  caption: string;
  width: number;
  length: number;
  height: number;
  thickness: number;
  weight: number;
}
