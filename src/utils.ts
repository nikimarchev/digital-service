export const customSortTwoPrices = (
    iphoneModels: { name: string; price: string, secondPrice: string; }[]
  ) => {
    const sortOrder = [
      "iPhone 14 Pro",
      "iPhone 14 Pro Max",
      "iPhone 14",
      "iPhone 14 Plus",
      "iPhone 13 Pro",
      "iPhone 13 Pro Max",
      "iPhone 13",
      "iPhone 13 mini",
      "iPhone 12 Pro",
      "iPhone 12 Pro Max",
      "iPhone 12",
      "iPhone 12 mini",
      "iPhone 11 Pro",
      "iPhone 11 Pro Max",
      "iPhone 11",
      "iPhone SE 2020",
      "iPhone XS",
      "iPhone XS Max",
      "iPhone XR",
      "iPhone X",
      "iPhone 8",
      "iPhone 8 Plus",
      "iPhone 7",
      "iPhone 7 Plus",
      "iPhone 6S",
      "iPhone 6S Plus",
      "iPhone 6",
      "iPhone 6 Plus",
      "iPhone SE 1 gen",
      "iPhone 5S",
      "iPhone 5C",
      "iPhone 5",
      "iPhone 4S",
      "iPhone 4",
    ];
    const sortedModels = iphoneModels.sort(
      (a, b) => sortOrder.indexOf(a.name) - sortOrder.indexOf(b.name)
    );
    return sortedModels;
  };

export const customSort = (
  iphoneModels: { name: string; price: string }[]
) => {
  const sortOrder = [
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",
    "iPhone 14",
    "iPhone 14 Plus",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 13",
    "iPhone 13 mini",
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",
    "iPhone 12",
    "iPhone 12 mini",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "iPhone 11",
    "iPhone SE 2020",
    "iPhone XS",
    "iPhone XS Max",
    "iPhone XR",
    "iPhone X",
    "iPhone 8",
    "iPhone 8 Plus",
    "iPhone 7",
    "iPhone 7 Plus",
    "iPhone 6S",
    "iPhone 6S Plus",
    "iPhone 6",
    "iPhone 6 Plus",
    "iPhone SE 1 gen",
    "iPhone 5S",
    "iPhone 5C",
    "iPhone 5",
    "iPhone 4S",
    "iPhone 4",
  ];
  const sortedModels = iphoneModels.sort(
    (a, b) => sortOrder.indexOf(a.name) - sortOrder.indexOf(b.name)
  );
  return sortedModels;
};