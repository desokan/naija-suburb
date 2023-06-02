import { useState } from "react";
import UserAuthForm from "../../components/2Forms/UserAuthForm";
import {
  faAt,
  faGlobe,
  faLock,
  faSquarePhone,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./SignupPage.module.css";
import countries from "../../utils/countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignupPage = () => {
  const [formData, setFormData] = useState({});

  const formFields = [
    {
      name: "telephone",
      label: "Telephone",
      type: "tel",
      icon: faSquarePhone,
      iconSize: "sm",
      placeholder: "Telephone",
      iconStyle: { color: "#ffffff" },
      required: true,
      notice: "",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      icon: faAt,
      iconSize: "sm",
      placeholder: "Email Address",
      iconStyle: { color: "#ffffff" },
      required: true,
      notice: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      icon: faLock,
      iconSize: "sm",
      placeholder: "Password",
      iconStyle: { color: "#ffffff" },
      required: true,
      notice: "",
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      icon: faGlobe,
      iconSize: "sm",
      iconStyle: { color: "#ffffff" },
      required: true,
      options: countries,
    },
  ];

  const handleSubmit = (formState) => {
    setFormData(formState);
  };

  console.log("Form submitted:", formData);

  return (
    <div className={classes.container}>
      <div className={classes.brandSection}>
        <div className={classes.brandLogo}>
          <p>NiD</p>
        </div>
        <p className={classes.brandName}>NaijaSuburb</p>
      </div>
      <div className={classes.formSection}>
        <UserAuthForm fields={formFields} onSubmit={handleSubmit} />
        <div className={classes.gotoLogin}>
          <p>Have an account? Go to Login</p>
          <div className={classes.iconDisplay}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
