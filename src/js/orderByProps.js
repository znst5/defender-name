export function orderByProps(obj, sortOrder) {
  const firstProp = [];
  const secondProp = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (sortOrder.includes(key)) {
        firstProp.push({ key, value: obj[key] });
      } else {
        secondProp.push({ key, value: obj[key] });
      }
    }
  }

  firstProp.sort((a, b) => sortOrder.indexOf(a.key) - sortOrder.indexOf(b.key));
  secondProp.sort((a, b) => a.key.localeCompare(b.key));

  return [...firstProp, ...secondProp];
}
