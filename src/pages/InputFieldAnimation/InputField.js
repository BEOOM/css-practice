import React from 'react';
import './InputField.css';

const InputField = () => {
  return (
    <div className="pageWrapper">
      <div className="inputWrapper">
        <div className="inputBox">
          <input type="text" required="required" />
          <span>First Name</span>
        </div>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Last Name</span>
        </div>
      </div>
    </div>
  );
};

export default InputField;
