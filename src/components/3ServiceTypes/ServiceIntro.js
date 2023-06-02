import { Link } from "react-router-dom";
import classes from "./ServiceIntro.module.css";

const ServiceIntro = ({ errand, backgroundColor }) => {
  const linkTo = `/${errand}`;

  return (
    <>
      <Link to={linkTo} className={classes.linkstyle}>
        <p className={classes.carddesign} style={{ backgroundColor }}>
          {errand}
        </p>
      </Link>
    </>
  );
};

export default ServiceIntro;
