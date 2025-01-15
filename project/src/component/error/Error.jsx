import React from 'react';

const Error = ({ status, text }) => {
  return (
    <div className="error-container">
      <h2 className="error-status">Error {status}</h2>
    </div>
  );
};

export default Error;
