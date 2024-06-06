import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <br />
      <strong>Definition:</strong>
      <p>{props.meaning.definition}</p>
      <br />
      <strong>Example:</strong>
      <p>
        <i>{props.meaning.example}</i>
      </p>
      <br />

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
