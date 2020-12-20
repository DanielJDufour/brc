# fast-brc
> Convert Image Data to 3-Dimensional Array

# install
```bash
npm install -S fast-brc
```

# usage
```javascript
import brc from 'fast-brc';

const { data } = brc({
  data: imageData, // like [r0,g0,b0,a0,r1,g1,b1,a1 ...]
  debug: true,
  height: 10,
  width: 10
});

/*
data is [
  [
    [r0, r1, r2, r3, ...], // row 1
    [r10, r11, r12, ...]   // row 2
    ...
  ],
  [
    [g0, g1, g2, g3, ...], // row 1
    [g10, g11, g12, ...]   // row 2
    ...
  ],
  [
    [b0, b1, b2, b3, ...], // row 1
    [b10, b11, b12, ...]   // row 2
    ...
  ],
  [
    [a0, a1, a2, a3, ...], // row 1
    [a10, a11, a12, ...]   // row 2
    ...
  ]
]
```