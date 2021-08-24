import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
 const [time, setTime] = useState(0);

  const [terminate, setTerminate] = useState(false);


 

  useEffect(() => {

    !terminate &&

      setTimeout(() => {

        time > 0 && setTime(time - 1);

      }, 1000);

    terminate && setTime(0);

  }, [time]);


 

  const decreamentCount = (e) => {

    if (e.key === "Enter") {

      // console.log(isNaN(e.target.value));

      console.log(e.target.value);

      if (isNaN(e.target.value) || e.target.value == 0) {

        setTerminate(true);

      } else {

        setTerminate(false);

        setTime(Math.floor(e.target.value));

      }

    }

  };

  console.log(terminate);

  return (

    <div className="wrapper">

      <div id="whole-center">

        <h1>

          Reverse countdown for

          <input

            id="timeCount"

            onKeyDown={decreamentCount /* callback function */}

          />{" "}

          sec.

        </h1>

      </div>


 

      <div id="current-time">{terminate ? 0 : time}</div>

    </div>

  );

};


export default App;
