import { useState } from "react";
import UserAuthForm from "../../../components/formComponents/UserAuthForm";
import {
  faAt,
  faLock,
  faSquarePhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./LoginPage.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({});

  const formFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      icon: faUser,
      iconSize: "sm",
      placeholder: "USERNAME",
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
  ];

  const handleSubmit = (formState) => {
    setFormData(formState);
  };

  console.log("Form submitted:", formData);

  return (
    <div className={classes.container}>
      <div>
        <h1>Haola ADESOKAN</h1>
      </div>
      <div>
        <UserAuthForm fields={formFields} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginForm;
