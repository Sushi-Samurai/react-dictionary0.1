import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.result.word) {
    return (
      <div>
        <section>
          <h2>{props.result.word}</h2>
          <p className="phonetics">/{props.result.phonetic}/</p>
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} index={index} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <section>
        <p>
          Sorry, we couldn't find the word you are looking for. Please check
          your spelling or try another word.
        </p>
      </section>
    );
  }
}
