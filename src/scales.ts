const getType = (type: string) => {
  if (type === "major") return type;
  return "minor";
};

const scaleFor = (type: string, octaves: number) => {
  switch (type) {
    case "major":
      switch (octaves) {
        case 1:
          return "CDEF GABc|BAGF ED C2";
        case 2:
          return "CDEF GABc|defg abc'b|agfe dcBA GFED|C4";
      }
      break;
    case "natural":
      switch (octaves) {
        case 1:
          return "CDEF GABc|BAGF ED C2";
        case 2:
          return "CDEF GABc|defg abc'b|agfe dcBA GFED|C4";
      }
      break;
    case "harmonic":
      switch (octaves) {
        case 1:
          return "CDEF GA=Bc|=BAGF ED C2";
        case 2:
          return "CDEF GA=Bc|defg a=bc'=b|agfe dc=BA GFED|C4";
      }
      break;
    case "melodic":
      switch (octaves) {
        case 1:
          return "CDEF G=A=Bc|_B_AGF ED C2";
        case 2:
          return "CDEF G=A=Bc|defg =a=bc'_b|_agfe dc_B_A GFED|C4";
      }
      break;
  }
};

const bassScaleFor = (type: string, octaves: number) => {
  switch (type) {
    case "major":
      switch (octaves) {
        case 1:
          return "C,D,E,F, G,A,B,C|B,A,G,F, E,D, C,2";
        case 2:
          return "C,D,E,F, G,A,B,C|DEFG ABcB|AGFE DCB,A, G,F,E,D,|C,4";
      }
      break;
    case "natural":
      switch (octaves) {
        case 1:
          return "C,D,E,F, G,A,B,C|B,A,G,F, E,D, C,2";
        case 2:
          return "C,D,E,F, G,A,B,C|DEFG ABcB|AGFE DCB,A, G,F,E,D,|C,4";
      }
      break;
    case "harmonic":
      switch (octaves) {
        case 1:
          return "C,D,E,F, G,A,=B,C|=B,A,G,F, E,D, C,2";
        case 2:
          return "C,D,E,F, G,A,=B,C|DEFG A=Bc=B|AGFE DC=B,A, G,F,E,D,|C,4";
      }
      break;
    case "melodic":
      switch (octaves) {
        case 1:
          return "C,D,E,F, G,=A,=B,C|_B,_A,G,F, E,D, C,2";
        case 2:
          return "C,D,E,F, G,=A,=B,C|DEFG =A=Bc_B|_AGFE DC_B,_A, G,F,E,D,|C,4";
      }
      break;
  }
};

const arpeggioFor = (type: string, octaves: number) => {
  switch (octaves) {
    case 1:
      return "CEG cGE|C3";
    case 2:
      return "CEG ceg|c'ge cGE|C3";
  }
};

const bassArpeggioFor = (type: string, octaves: number) => {
  switch (octaves) {
    case 1:
      return "C,E,G, CG,E,|C,3";
    case 2:
      return "C,E,G, CEG|cGE CG,E,|C,3";
  }
};

const chromaticFor = (transpose: number, octaves: number) => {
  switch (octaves) {
    case 1:
      return "C^CD^D EF^FG|^GA^AB cB_BA|_AG_GF E_ED_D|C4"
    case 2:
  }
}

const bassChromaticFor = (transpose: number, octaves: number) => {
  switch (octaves) {
    case 1:
      return "C^CD^D EF^FG|^GA^AB cB_BA|_AG_GF E_ED_D|C4"
    case 2:
  }
}

const toScale = (octaves: number, hands: number, type: string) =>
  `
X: 1
M: 4/4
L: 1/8
K: C ${getType(type)}
V:
${scaleFor(type, octaves)}
${hands === 2 ?
  `V:2 clef=bass
${bassScaleFor(type, octaves)}` : ''}
`;

const toArpeggio = (octaves: number, hands: number, type: string) =>
  `
X: 1
M: 6/8
L: 1/8
K: C ${getType(type)}
V:
${arpeggioFor(type, octaves)}
${hands === 2 ?
  `V:2 clef=bass
${bassArpeggioFor(type, octaves)}` : ''}
`;

const toChromatic = (octaves: number, transpose: number, hands: number) =>
`
X: 1
M: 4/4
L: 1/8
K: none
V:
${chromaticFor(transpose, octaves)}
${hands === 2 ?
  `V:2 clef=bass
${bassChromaticFor(transpose, octaves)}` : ''}
`;

export const getScale = (type: string, octaves: number, hands: number) =>
  toScale(octaves, hands, type);

export const getArpeggio = (type: string, octaves: number, hands: number) =>
  toArpeggio(octaves, hands, type);

export const getChromatic = (octaves: number, transpose: number, hands: number) => toChromatic(octaves, transpose, hands);
