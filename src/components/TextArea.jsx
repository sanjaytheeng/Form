import React from "react";

const TextArea = ({ label, name, value, onChange, placeholder, required }) => {
  return (
    <div className="textarea">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextArea;
