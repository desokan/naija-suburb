import LoginForm from "./pages/Authentication/LoginPage/LoginPage";
import PageHeader from "./components/appSectionComponents/Header";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.appContainer}>
      <PageHeader />
      <LoginForm />
    </div>
  );
}

export default App;
