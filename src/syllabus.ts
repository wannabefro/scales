const KEYS: { [key: string]: number } = {
  C: 0,
  "C sharp": 1,
  "D flat": 1,
  D: 2,
  "E flat": 3,
  E: 4,
  F: 5,
  "F sharp": 6,
  G: 7,
  "G sharp": -4,
  "A flat": -4,
  A: -3,
  "B flat": -2,
  B: -1,
};

const convertKeyToTranspose = (key: string) => KEYS[key];

type Scale = {
  key: string;
  type: string;
  name: string;
  hands: number;
  octaves: number;
  transpose: number;
};

const scale = (
  key: string,
  type: string,
  octaves: number,
  hands: number = 1,
) => ({
  key,
  type,
  name: `${key} ${type}`,
  octaves,
  transpose: convertKeyToTranspose(key),
  hands,
});

const allMinorScales = (key: string, octaves: number) =>
  ["natural", "melodic", "harmonic"].map(type => scale(key, type, octaves));

const harmonicAndMelodicScales = (
  key: string,
  octaves: number,
  hands: number = 1,
) => ["melodic", "harmonic"].map(type => scale(key, type, octaves, hands));

const SYLLABUS: {
  [key: string]: {
    [key: number]: {
      scales: { meta?: {}; keys: Scale[] };
      arpeggios: { meta?: {}; keys: Scale[] };
    };
  };
} = {
  piano: {
    4: {
      scales: {
        keys: [
          scale("B", "major", 2, 2),
          scale("B flat", "major", 2, 2),
          scale("E flat", "major", 2, 2),
          scale("A flat", "major", 2, 2),
          scale("D flat", "major", 2, 2),
          ...harmonicAndMelodicScales("C sharp", 2, 2),
          ...harmonicAndMelodicScales("G sharp", 2, 2),
          ...harmonicAndMelodicScales("C", 2, 2),
          ...harmonicAndMelodicScales("F", 2, 2),
        ],
      },
      arpeggios: {
        keys: [
          scale("B", "major", 2, 2),
          scale("B flat", "major", 2, 2),
          scale("E flat", "major", 2, 2),
          scale("A flat", "major", 2, 2),
          scale("D flat", "major", 2, 2),
          scale("C sharp", "minor", 2, 2),
          scale("G sharp", "minor", 2, 2),
          scale("C", "minor", 2, 2),
          scale("F", "minor", 2, 2),
        ],
      },
    },
  },
  violin: {
    1: {
      scales: {
        meta: {
          "bowing requirements":
            "separate bows or slurred (2 quavers to a bow) at examiner's choice.",
          "rhythm pattern": "even notes or long tonic, at candidate's choice",
        },
        keys: [
          scale("D", "major", 1),
          scale("A", "major", 1),
          scale("E", "natural", 1),
          scale("G", "major", 2),
        ],
      },
      arpeggios: {
        meta: {
          "bowing requirements": "separate bows",
          "rhythmic pattern": "even notes",
        },
        keys: [
          scale("D", "major", 1),
          scale("A", "major", 1),
          scale("E", "minor", 1),
          scale("G", "major", 2),
        ],
      },
    },
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

export default SYLLABUS;
