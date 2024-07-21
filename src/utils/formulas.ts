const calcPaperWeight = (
  quantity: number,
  mediaGramsSqMeterWeight: number,
  detailWidth: number,
  detailLength: number
) => (quantity * mediaGramsSqMeterWeight * detailWidth * detailLength) / 1e6; // gram;

const calcOneSqMLaminateWeight = (
  filmRollWeightKg: number,
  filmRollLength: number,
  filmRollWidth: number
) => (1e6 * filmRollWeightKg) / (filmRollLength * filmRollWidth); // gram;

const calcLaminateWeight = (
  quantity: number,
  laminationSides: number,
  oneSqMLaminateWeight: number,
  detailWidth: number,
  detailLength: number
) =>
  (quantity *
    laminationSides *
    oneSqMLaminateWeight *
    detailWidth *
    detailLength) /
  1e6; // gram;

const calcPaperThickness = (mediaThicknessMm: number) => mediaThicknessMm;

const calcLaminateThickness = (
  laminationSides: number,
  filmThicknessMicron: number
) => laminationSides * filmThicknessMicron * 1000;

export const calcProductionWeight = ({
  quantity,
  laminationSides = 0,
  detailWidth,
  detailLength,
  filmRollWeightKg,
  filmRollLength,
  filmRollWidth,
  mediaGramsSqMeterWeight,
}: {
  quantity: number;
  laminationSides: number;
  detailWidth: number;
  detailLength: number;
  filmRollWeightKg: number;
  filmRollLength: number;
  filmRollWidth: number;
  mediaGramsSqMeterWeight: number;
}) =>
  calcPaperWeight(
    quantity,
    mediaGramsSqMeterWeight,
    detailWidth,
    detailLength
  ) +
  (laminationSides &&
    calcLaminateWeight(
      quantity,
      laminationSides,
      calcOneSqMLaminateWeight(filmRollWeightKg, filmRollLength, filmRollWidth),
      detailWidth,
      detailLength
    )); // gram

export const calcProductionHeight = ({
  quantity,
  mediaThicknessMm,
  laminationSides = 0,
  filmThicknessMicron = 0,
}: {
  quantity: number;
  mediaThicknessMm: number;
  laminationSides: number;
  filmThicknessMicron: number;
}) =>
  quantity *
  (calcPaperThickness(mediaThicknessMm) +
    calcLaminateThickness(laminationSides, filmThicknessMicron)); // mm

export const calcImposition = (
  // boxWidth: number,
  // boxLength: number,
  // detailWidth: number,
  // detailLength: number,
  // gapX: number,
  // gapY: number,
  // marginLeft: number,
  // marginRight: number,
  // marginUp: number,
  // marginDown: number,
  // isRotate: number
) => ({ itemsX: 2, itemsY: 1, itemsRotated: 0 });

export const calcItemsTotal = () => {
  const { itemsX, itemsY, itemsRotated } = calcImposition();
  return itemsX * itemsY + itemsRotated;
};

export const calcBoxesCount = (productionHeightTotal: number, itemsTotal: number, boxHeight: number) =>
  itemsTotal && boxHeight ? productionHeightTotal / itemsTotal / boxHeight : 0;
