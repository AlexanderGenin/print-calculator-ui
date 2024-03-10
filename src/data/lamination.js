export const laminations = {
  gloss: {
    id: 1, // получаем из артикула материала
    filmOneMeterCost: 9, // цена
    filmThicknessMicron: 30, // Толщина ламината мкм (показать в UI)
    filmTexture: "глянцевый", // (показать в UI)
    filmRollLength: 3000, // Длина намотки ламината в рулоне метров
    filmRollWidth: 500, // Ширина рулона ламината в мм
    filmRollWeightKg: 50, // вес рулона ламината в кг
  },
  opaque: {
    id: 2,
    filmOneMeterCost: 35,
    filmThicknessMicron: 75,
    filmTexture: "матовый",
    filmRollLength: 1000,
    filmRollWidth: 330,
    filmRollWeightKg: 17,
  },
};

export const laminationLabels = [
  { label: "матовая", value: "opaque" },
  { label: "глянцевая", value: "gloss" },
];

export const filmThicknessMicronLabels = [
  { label: 30, value: 30 },
  { label: 75, value: 75 },
];
