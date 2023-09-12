
export const rgbToHex = (colorArray:number[][]) => {
  const hexColorArray = colorArray.map((color) => {
    const hex = color.map((c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");

    return `#${hex}`;
  })
  return hexColorArray;
}

