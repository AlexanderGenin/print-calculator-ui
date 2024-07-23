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

export interface BoxResponseDto {
  weight: number;
  volume: number;
  innerVolume: number;
  productQuantity: number;
  productVolume: number;
  unusedVolumePercent: number;
}

export interface PackInBoxResponseDto {
  box: BoxResponseDto;
  restBox: BoxResponseDto;
  boxesQuantity: number;
  boxesWeight: number;
  productsVolume: number;
  boxesVolume: number;
  boxesInnerVolume: number;
}
