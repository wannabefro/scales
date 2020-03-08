import React, { useEffect } from "react";
import abcjs from "abcjs";
import { useParams } from 'react-router-dom';
import syllabus from "./syllabus";
import { getArpeggio, getScale } from "./scales";

function Grade() {
  const { instrument, grade } = useParams() as { instrument: string, grade: string };
  const currentSyllabus = syllabus[instrument][Number(grade)];

  useEffect(() => {
    currentSyllabus.scales.keys.forEach((scale) => {
      abcjs.renderAbc(`scale${scale.name}`, getScale(scale.type, scale.octaves, scale.hands), { visualTranspose: scale.transpose });
    });
    currentSyllabus.arpeggios.keys.forEach((arpeggio) => {
      abcjs.renderAbc(`arpeggio${arpeggio.name}`, getArpeggio(arpeggio.type, arpeggio.octaves, arpeggio.hands), { visualTranspose: arpeggio.transpose });
    });
  }, [currentSyllabus]);

  return (
    <>
      <h1>{instrument}: Grade {grade}</h1>
      <h1>Scales</h1>
      {currentSyllabus.scales.meta && Object.entries(currentSyllabus.scales.meta).map(([label, value]) => (
        <p key={label}>
          {label}: {value}
        </p>
      ))}
      {currentSyllabus.scales.keys.map(scale => (
        <div key={scale.name}>
          <p>{scale.name} ({scale.octaves} octave)</p>
          <div id={`scale${scale.name}`} />
        </div>
      ))}
      <h1>Arpeggios</h1>
      {currentSyllabus.arpeggios.meta && Object.entries(currentSyllabus.arpeggios.meta).map(([label, value]) => (
        <p key={label}>
          {label}: {value}
        </p>
      ))}
      {currentSyllabus.arpeggios.keys.map(arpeggio => (
        <div key={arpeggio.name}>
          <p>{arpeggio.name} ({arpeggio.octaves} octave)</p>
          <div id={`arpeggio${arpeggio.name}`} />
        </div>
      ))}
    </>
  );
}

export default Grade;
