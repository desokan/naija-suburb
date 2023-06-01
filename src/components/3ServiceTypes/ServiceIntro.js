import { Link } from "react-router-dom";
import classes from "./ServiceIntro.module.css";

const ServiceIntro = ({ errand, backgroundColor }) => {
  return (
    <>
      <Link to='/'>
        <p className={classes.carddesign} style={{ backgroundColor }}>
          {errand}
        </p>
      </Link>
    </>
  );
};

export default ServiceIntro;
