import Counter from './components/Counter';
import {Fragment} from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import {useSelector} from "react-redux";
import UserProfile from "./components/UserProfile";


function App() {
  console.log("pass app")

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
      <Fragment>
        <Header/>
        {!isAuthenticated && <Auth/>}
        {isAuthenticated && <UserProfile/>}
        <Counter/>
      </Fragment>
  );
}

export default App;
