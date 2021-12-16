import React from 'react';

function About() {
  return (
    <div className={"container"}>
      <h3>
        A simple notes web-app developed by Anurag Pathak, for learning purpose.
      </h3>

      <ul className={"container"}>
        <li>React and React-router-dom used in making this app.</li>
        <li>Apart from mentioned browser local storage is also used to retain the notes.
        </li>
      </ul>
    </div>
  );
}

export default About;