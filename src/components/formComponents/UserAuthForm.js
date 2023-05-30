import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./UserAuthForm.module.css";

function UserAuthForm({ fields, onSubmit }) {
  const [formState, setFormState] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    setFormState('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        return (
          <div key={field.name} className={classes.inputContainer}>
            <div className={classes.iconDispplay}>
              <FontAwesomeIcon
                icon={field.icon}
                size={field.iconSize}
                style={field.iconStyle}
              />
            </div>
            <div>
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                value={formState[field.name] || ""}
                placeholder={field.placeholder}
                onChange={handleInputChange}
                required={field.required}
              />
              <p>{field.notice}</p>
            </div>
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserAuthForm;
