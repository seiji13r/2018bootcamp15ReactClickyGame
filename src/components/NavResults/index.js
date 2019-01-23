import React from "react";

function NavResult({messages, msgCode, currScore, maxScore}) {
  return (
    <div>
      NavResult / {messages[msgCode].msg} / 
      <strong>Current Score:</strong> {currScore} / 
      <strong>Max Score:</strong> {maxScore}
    </div>
  );
}

export default NavResult;