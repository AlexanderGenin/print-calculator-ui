export interface PackInBoxRequestDto {
  box: {
    format: string;
    thickness: number;
    margins: string;
    weight: number;
    maxWeight?: number;
  };
  product: {
    format: string;
    thickness: number;
    weightM2: number;
    quantity: number;
  };
}

export interface PackInBoxResponseDto {
  box: {
    productQuantity: number;
    productVolume: number;
    weight: number;
    unusedVolume: number;
  };
  lastBox: {
    productQuantity: number;
    productVolume: number;
    weight: number;
    unusedVolume: number;
  };
  productsVolume: number;
  boxesVolume: number;
  boxesQuantity: number;
}
