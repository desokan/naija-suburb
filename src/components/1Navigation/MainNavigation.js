import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const PageHeader = () => {
  return (
    <div className={classes.main}>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faBars} className={classes.iconStyle} />
      </div>
      <div className={classes.search}>
        {/* <form>
          <input type="text" name="search" placeholder="Search" className={classes.searchInput}></input>
        </form> */}
      </div>
      <div>
        <p>Header</p>
      </div>
    </div>
  );
};

export default PageHeader;
