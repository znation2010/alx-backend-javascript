export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();
  for (const [item, quantity] of groceriesMap) {
    if (quantity === 1) {
      updatedMap.set(item, 100);
    } else {
      updatedMap.set(item, quantity);
    }
  }

  return updatedMap;
}
