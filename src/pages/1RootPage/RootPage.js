import { Outlet } from "react-router-dom";
import MainNavigation from '../../components/1Navigation/MainNavigation'
import classes from "./RootPage.module.css";

function RootPage() {
  return (
    <div className={classes.content}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootPage;
