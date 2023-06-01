import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./UserAuthForm.module.css";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

function UserAuthForm({ fields, onSubmit }) {
  const [formState, setFormState] = useState({});

  const iconStyle = {
    color: "#C1C1C1",
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
    setFormState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        if (field.type === "select") {
          return (
            <div key={field.name} className={classes.inputContainer}>
              <div className={classes.iconDisplay}>
                <FontAwesomeIcon
                  icon={field.icon}
                  size={field.iconSize}
                  style={field.iconStyle}
                />
              </div>
              <select
                id={field.name}
                name={field.name}
                value={formState[field.name] || ""}
                placeholder={field.placeholder}
                onChange={handleInputChange}
                required={field.required}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        } else {
          return (
            <div key={field.name} className={classes.inputContainer}>
              <div className={classes.iconDisplay}>
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
        }
      })}

      <div className={classes.termsConditions}>
        <p>
          Upon registering, you are accepting our <span>Privacy Policy</span>,
          <span>Terms of Service</span>, and <span>Cookie Policy</span>.
        </p>
      </div>

      <div className={classes.submitButtonControl}>
        <div className={classes.iconDisplay}>
          <FontAwesomeIcon icon={faArrowRightToBracket} style={iconStyle} />
        </div>

        <button type="submit" className={classes.submitButton}>
          REGISTER
        </button>
      </div>
    </form>
  );
}

export default UserAuthForm;
