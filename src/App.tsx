import React, { useEffect, useState } from "react";
import "./App.css";
import abcjs from "abcjs";
import syllabus from "./syllabus";
import { getArpeggio, getScale } from "./scales";

function App() {
  const [currentSyllabus, setCurrentSyllabus] = useState(syllabus.violin[2]);

  useEffect(() => {
    currentSyllabus.scales.keys.forEach((scale) => {
      abcjs.renderAbc(`scale${scale.name}`, getScale(scale.type, scale.octaves), { visualTranspose: scale.transpose });
    });
    currentSyllabus.arpeggios.keys.forEach((arpeggio) => {
      abcjs.renderAbc(`arpeggio${arpeggio.name}`, getArpeggio(arpeggio.type, arpeggio.octaves), { visualTranspose: arpeggio.transpose });
    });
  }, [currentSyllabus]);

  return (
    <>
      <h1>Scales</h1>
      {Object.entries(currentSyllabus.scales.meta).map(([label, value]) => (
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
      {Object.entries(currentSyllabus.arpeggios.meta).map(([label, value]) => (
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

export default App;
