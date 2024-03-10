const calcPaperWeight = (
  quantity,
  mediaGramsSqMeterWeight,
  detailWidth,
  detailLength
) => (quantity * mediaGramsSqMeterWeight * detailWidth * detailLength) / 1e6; // gram;

const calcOneSqMLaminateWeight = (
  filmRollWeightKg,
  filmRollLength,
  filmRollWidth
) => (1e6 * filmRollWeightKg) / (filmRollLength * filmRollWidth); // gram;

const calcLaminateWeight = (
  quantity,
  laminationSides,
  oneSqMLaminateWeight,
  detailWidth,
  detailLength
) =>
  (quantity *
    laminationSides *
    oneSqMLaminateWeight *
    detailWidth *
    detailLength) /
  1e6; // gram;

const calcPaperThickness = (mediaThicknessMm) => mediaThicknessMm;

const calcLaminateThickness = (laminationSides, filmThicknessMicron) =>
  laminationSides * filmThicknessMicron * 1000;

export const calcProductionWeight = ({
  quantity,
  laminationSides = 0,
  detailWidth,
  detailLength,
  filmRollWeightKg,
  filmRollLength,
  filmRollWidth,
  mediaGramsSqMeterWeight,
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
}) =>
  quantity *
  (calcPaperThickness(mediaThicknessMm) +
    calcLaminateThickness(laminationSides, filmThicknessMicron)); // mm

export const calcImposition = (
  boxWidth,
  boxLength,
  detailWidth,
  detailLength,
  gapX,
  gapY,
  marginLeft,
  marginRight,
  marginUp,
  marginDown,
  isRotate
) => ({ itemsX: 2, itemsY: 1, itemsRotated: 0 });

export const calcItemsTotal = () => {
  const { itemsX, itemsY, itemsRotated } = calcImposition();
  return itemsX * itemsY + itemsRotated;
};

export const calcBoxesCount = (productionHeightTotal, itemsTotal, boxHeight) =>
  itemsTotal && boxHeight ? productionHeightTotal / itemsTotal / boxHeight : 0;
