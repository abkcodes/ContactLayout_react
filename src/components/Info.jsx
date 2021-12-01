import React from "react";

function Info(props) {
  return (
    <div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
export default Info;
