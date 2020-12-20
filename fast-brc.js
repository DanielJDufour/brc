function brc({ numBands=4, data, debug=false, height, width }) {

  if (typeof data === "object" && data.constructor && data.constructor.name === "ImageData" && data.data) {
    data = data.data;
    if (!height) height = data.height;
    if (!width) width = data.width;
  }

  const valuesPerRow = width * numBands;

  if (!height && numBands && width) height = data.length / numBands / width;
  if (!width && numBands && width) width = data.length / numBands / height;
  if (!numBands && height && width) numBands = data.length / height / width;

  const values = [];

  for (let bandIndex = 0; bandIndex < numBands; bandIndex++) {
      const band = [];
      for (let rowIndex = 0; rowIndex < height; rowIndex++) {
          const row = [];
          for (let colIndex = 0; colIndex < width; colIndex++) {
              const i =
                  rowIndex * valuesPerRow +
                  colIndex * numBands +
                  bandIndex;
              row.push(data[i]);
          }
          band.push(row);
      }
      values.push(band);
  }

  const result = { data: values };
  if (debug) console.log("[fast-brc] finishing with", result);
  return result;
}

if (typeof module !== "undefined") module.exports = brc;
if (typeof window !== "undefined") window.brc = brc;
if (typeof self !== "undefined") self.brc = brc;
