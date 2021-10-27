import React, { useState } from "react";
import Proptypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputvalue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handSubmit = (e) => {
    e.preventDefault();

    if (inputvalue.trim().length > 2) {
      setCategories((cats) => [inputvalue]);
      setInputValue("");
    }
  };
  return (
    <>
      <form onSubmit={handSubmit}>
        <input
          placeholder="Insert your word here ......"
          className="input"
          type="text"
          value={inputvalue}
          onChange={handleInputChange}
        ></input>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired,
};
