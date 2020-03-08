import React, { useEffect } from "react";
import abcjs from "abcjs";
import { useParams } from "react-router-dom";
import syllabus from "./syllabus";
import { getArpeggio, getScale, getChromatic } from "./scales";
import './grades.css';

function Grade() {
  const { instrument, grade } = useParams() as {
    instrument: string;
    grade: string;
  };
  const currentSyllabus = syllabus[instrument][Number(grade)];

  useEffect(() => {
    currentSyllabus.scales.keys.forEach(scale => {
      abcjs.renderAbc(
        `scale${scale.name}`,
        getScale(scale.type, scale.octaves, scale.hands),
        { visualTranspose: scale.transpose },
      );
    });
    currentSyllabus.arpeggios.keys.forEach(arpeggio => {
      abcjs.renderAbc(
        `arpeggio${arpeggio.name}`,
        getArpeggio(arpeggio.type, arpeggio.octaves, arpeggio.hands),
        { visualTranspose: arpeggio.transpose },
      );
    });
    currentSyllabus.chromatics?.keys.forEach(chromatic => {
      abcjs.renderAbc(
        `chromatic${chromatic.name}`,
        getChromatic(chromatic.octaves, chromatic.transpose, chromatic.hands),
        { visualTranspose: chromatic.transpose, add_classes: true },
      );
    });
  }, [currentSyllabus]);

  return (
    <>
      <h1>
        {instrument}: Grade {grade}
      </h1>
      <h1>Scales</h1>
      {currentSyllabus.scales.meta &&
        Object.entries(currentSyllabus.scales.meta).map(([label, value]) => (
          <p key={label}>
            {label}: {value}
          </p>
        ))}
      {currentSyllabus.scales.keys.map(scale => (
        <div key={scale.name}>
          <p>
            {scale.name} ({scale.octaves} octave)
          </p>
          <div id={`scale${scale.name}`} />
        </div>
      ))}
      <h1>Arpeggios</h1>
      {currentSyllabus.arpeggios.meta &&
        Object.entries(currentSyllabus.arpeggios.meta).map(([label, value]) => (
          <p key={label}>
            {label}: {value}
          </p>
        ))}
      {currentSyllabus.arpeggios.keys.map(arpeggio => (
        <div key={arpeggio.name}>
          <p>
            {arpeggio.name} ({arpeggio.octaves} octave)
          </p>
          <div id={`arpeggio${arpeggio.name}`} />
        </div>
      ))}
      {currentSyllabus.chromatics && <h1>Chromatics</h1>}
      {currentSyllabus.chromatics?.meta &&
        Object.entries(currentSyllabus.chromatics.meta).map(
          ([label, value]) => (
            <p key={label}>
              {label}: {value}
            </p>
          ),
        )}
      {currentSyllabus.chromatics?.keys.map(chromatic => (
        <div key={chromatic.name}>
          <p>
            {chromatic.name} ({chromatic.octaves} octave)
          </p>
          <div id={`chromatic${chromatic.name}`} />
        </div>
      ))}
    </>
  );
}

export default Grade;
