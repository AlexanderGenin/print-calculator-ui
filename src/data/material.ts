export const materials = [
  {
    id: 1,
    mediaName: "opaque", // название материала (показать в UI)
    mediaOneSheetCost: 15.06, // цена руб за лист
    mediaGramsSqMeterWeight: 170, // вес кв метра листа в граммах (показать в UI)
    mediaTexture: "opaque", // текстура материала (показать в UI)
    mediaColor: "white", // цвет материала (показать в UI)
    mediaThicknessMm: 0.12, // толщина листа в мм
    mediaLength: 940, // длина листа mm
    medialWidth: 620, // ширина листа mm
  },
  {
    id: 2,
    mediaName: "gloss",
    mediaOneSheetCost: 16.72,
    mediaGramsSqMeterWeight: 170,
    mediaTexture: "gloss",
    mediaColor: "white",
    mediaThicknessMm: 0.12,
    mediaLength: 900,
    medialWidth: 640,
  },
  {
    id: 3,
    mediaName: "offset",
    mediaOneSheetCost: 7.56,
    mediaGramsSqMeterWeight: 80,
    mediaTexture: "offset",
    mediaColor: "white",
    mediaThicknessMm: 0.1,
    mediaLength: 1000,
    medialWidth: 700,
  },
  {
    id: 4,
    mediaName: "cardboard",
    mediaOneSheetCost: 46.31,
    mediaGramsSqMeterWeight: 320,
    mediaTexture: "double_sided",
    mediaColor: "white",
    mediaThicknessMm: 0.4,
    mediaLength: 1000,
    medialWidth: 700,
  },
];

export const mediaGramsSqMeterWeightLabels = [
  { label: 80, value: 80 },
  { label: 170, value: 170 },
  { label: 320, value: 320 },
];

export const mediaTextureLabels = [
  { label: "матовая", value: "opaque" },
  { label: "глянцевая", value: "gloss" },
  { label: "офсетная", value: "offset" },
  { label: "двухсторонний", value: "double_sided" },
];

export const mediaNameLabels = [
  { label: "меловка матовая", value: "opaque" },
  { label: "меловка глянцевая", value: "gloss" },
  { label: "офсетная", value: "offset" },
  { label: "картон", value: "cardboard" },
];

export const mediaColorLabels = [{ label: "белый", value: "white" }];

export const mediaNameToIdMap = {
  opaque: 1,
  gloss: 2,
  offset: 3,
  cardboard: 4,
};
