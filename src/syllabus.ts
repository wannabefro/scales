const KEYS: { [key: string]: number } = {
  C: 0,
  "C sharp": 1,
  D: 2,
  "E flat": 3,
  E: 4,
  F: 5,
  "F sharp": 6,
  G: 7,
  "A flat": 8,
  A: 9,
  "B flat": -2,
  B: -1,
};

const convertKeyToTranspose = (key: string) => KEYS[key];

const scale = (key: string, type: string, octaves: number) => ({
  key,
  type,
  name: `${key} ${type}`,
  octaves,
  transpose: convertKeyToTranspose(key),
});

const allMinorScales = (key: string, octaves: number) =>
  ["natural", "melodic", "harmonic"].map(type => scale(key, type, octaves));

export default {
  violin: {
    2: {
      scales: {
        meta: {
          "bowing requirements":
            "separate bows or slurred (2 quavers to a bow) at examiner's choice.",
          "rhythm pattern": "even notes or long tonic, at candidate's choice",
        },
        keys: [
          scale("C", "major", 1),
          scale("F", "major", 1),
          ...allMinorScales("G", 1),
          ...allMinorScales("D", 1),
          scale("G", "major", 2),
          scale("A", "major", 2),
          scale("B flat", "major", 2),
        ],
      },
      arpeggios: {
        meta: {
          "bowing requirements": "separate bows",
          "rhythmic pattern": "even notes",
        },
        keys: [
          scale("C", "major", 1),
          scale("F", "major", 1),
          scale("G", "minor", 1),
          scale("D", "minor", 1),
          scale("G", "major", 2),
          scale("A", "major", 2),
          scale("B flat", "major", 2),
        ],
      },
    },
  },
};
