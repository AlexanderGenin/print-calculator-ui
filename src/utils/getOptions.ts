interface Option {
  id: number;
  caption: string;
}

export const getOptions = <T extends Option>(data: T[]) => {
  return data.map((s) => ({
    label: s.caption,
    value: s.id,
  }));
};
