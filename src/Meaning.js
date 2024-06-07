import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.index < 3) {
    return (
      <div className="Meaning">
        <section>
          <h3>{props.meaning.partOfSpeech}</h3>
          <p>{props.meaning.definition}</p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      </div>
    );
  }
}
