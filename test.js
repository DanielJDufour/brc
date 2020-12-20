const test = require("ava");
const getDepth = require("get-depth");
const brc = require("./fast-brc");

test("converting to brc format", t => {
  const pixels = [0,1,2,255,4,5,6,255,8,9,10,255,11,12,13,255];
  const { data: reshaped_array } = brc({ data: pixels, debug: true, height: 2, numBands: 4, width: 2 });
  t.is(getDepth(reshaped_array), 3);
  t.deepEqual(reshaped_array, [[[0,4],[8,11]],[[1,5],[9,12]],[[2,6],[10,13]],[[255,255],[255,255]]]);
});
