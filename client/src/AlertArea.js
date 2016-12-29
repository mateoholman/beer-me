//How do we close or just flash the message?

import React, { PropTypes } from 'react';

const AlertArea = (props) => {
  return (
    <div className="alert-area">
      <p>This is a test alert</p>
      {props.message}
    </div>
  );
}

AlertArea.propTypes = {
  message: PropTypes.string
};

export default AlertArea;
