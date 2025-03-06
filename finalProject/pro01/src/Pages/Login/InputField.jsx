import React from 'react';
import './Login.css'; // Reuse the same CSS for consistent styling

const InputField = ({ type, placeholder, id }) => (
  <div className="input-wrapper">
    <label htmlFor={id} className="input-label">{placeholder}</label>
    <input type={type} id={id} className="input-field" placeholder={placeholder} />
  </div>
);

export default InputField;
