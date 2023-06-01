import { useState } from "react";
import UserAuthForm from "../../../components/formComponents/UserAuthForm";
import {
  faAt,
  faGlobe,
  faLock,
  faSquarePhone,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./LoginPage.module.css";
import countries from "../../../utils/countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = () => {
  const [formData, setFormData] = useState({});

  const formFields = [
    {
      name: "telephone",
      label: "Telephone",
      type: "tel",
      icon: faSquarePhone,
      iconSize: "sm",
      placeholder: "TELEPHONE",
      iconStyle: { color: "#C1C1C1" },
      required: true,
      notice: "",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      icon: faAt,
      iconSize: "sm",
      placeholder: "EMAIL",
      iconStyle: { color: "#C1C1C1" },
      required: true,
      notice: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      icon: faLock,
      iconSize: "sm",
      placeholder: "PASSWORD",
      iconStyle: { color: "#C1C1C1" },
      required: true,
      notice: "",
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      icon: faGlobe,
      iconSize: "sm",
      placeholder: "USERNAME",
      iconStyle: { color: "#C1C1C1" },
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
        <div>
          <UserAuthForm fields={formFields} onSubmit={handleSubmit} />
        </div>
        <div className={classes.gotoLogin}>
          <p>LOGIN</p>
          <div className={classes.iconDisplay}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
