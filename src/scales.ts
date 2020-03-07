const NATURAL_MINOR_SCALES = {
  scales: {
    1: `
X: 1
M: 4/4
L: 1/8
K: C minor
CDEF GABc|BAGF ED C2
    `,
    2: `
X: 1
M: 4/4
L: 1/8
K: C minor
CDEF GABc|defg abc'b|agfe dcBA|GFED C4
    `,
  },
};

const HARMONIC_MINOR_SCALES = {
  scales: {
    1: `
X: 1
M: 4/4
L: 1/8
K: C minor
CDEF GA=Bc|=BAGF ED C2
    `,
    2: `
X: 1
M: 4/4
L: 1/8
K: C minor
CDEF GA=Bc|defg a=bc'=b|agfe dc=BA|GFED C4
    `,
  },
};

const MELODIC_MINOR_SCALES = {
  scales: {
    1: `
X: 1
M: 4/4
L: 1/8
K: C minor
CDEF G=A=Bc|=BAGF ED C2
    `,
    2: `
X: 1
M: 4/4
L: 1/8
K: C minor
CDEF G=A=Bc|defg =a=bc'_b|agfe dc=BA|GFED C4
    `,
  },
};

const MINOR_ARPEGGIOS = {
  1: `
X: 1
M: 6/8
L: 1/8
K: C minor
CEG cGE|C3
`,

  2: `
X: 1
M: 6/8
L: 1/8
K: C minor
CEG ceg|c'ge cGE|C3
`,
};

const MAJOR_SCALES = {
  scales: {
    1: `
X: 1
M: 4/4
L: 1/8
K: C
CDEF GABc|BAGF ED C2
    `,
    2: `
X: 1
M: 4/4
L: 1/8
K: C
CDEF GABc|defg abc'b|agfe dcBA|GFED C4
    `,
  },
  arpeggios: {
    1: `
X: 1
M: 6/8
L: 1/8
K: C
CEG cGE|C3
`,

    2: `
X: 1
M: 6/8
L: 1/8
K: C
CEG ceg|c'ge cGE|C3
`,
  },
};

const ALL_SCALES: { [key: string]: { [octave: number]: string } } = {
  major: MAJOR_SCALES.scales,
  natural: NATURAL_MINOR_SCALES.scales,
  harmonic: HARMONIC_MINOR_SCALES.scales,
  melodic: MELODIC_MINOR_SCALES.scales,
};

const ALL_ARPEGGIOS: { [key: string]: { [octave: number]: string } } = {
  major: MAJOR_SCALES.arpeggios,
  minor: MINOR_ARPEGGIOS,
};

export const getScale = (type: string, octaves: number) =>
  ALL_SCALES[type][octaves];

export const getArpeggio = (type: string, octaves: number) =>
  ALL_ARPEGGIOS[type][octaves];
