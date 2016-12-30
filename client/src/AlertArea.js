//How do we close or just flash the message?

import React, { PropTypes } from 'react';

function removeAlert(e) {
  e.preventDefault();
  console.log('Alert Clicked');
  {document.getElementById('alert-area').innerHTML=""}
}

const AlertArea = (props) => {
  if (props.message !== ""){
  return (
    <div className="alert-area" id="alert-area">
      <div id="alert-message" onClick={removeAlert.bind(this)}>
        {props.message}
      </div>
      <div id="alert-button">
        <p>X</p>
      </div>
    </div>
  );}
  else {
    return (<div id="alert-area"></div>);
  }
}

AlertArea.propTypes = {
  message: PropTypes.string
};

export default AlertArea;
