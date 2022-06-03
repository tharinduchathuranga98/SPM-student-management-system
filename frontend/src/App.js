import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Webfont from "webfontloader";
import Home from "./component/Home/Home.js";
import React from "react";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./action/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";

//shamali - user/ admin submission
import SubmissionForm from "./component/Submission/SubmissionForm";
import MarkingSchem from "./component/Submission/MarkingSchem";
import AdminFileUpload from "./component/Submission/AdminFileUpload";
import ReadAllSubmissionSupervi from "./component/Submission/ReadAllSubmissionSupervi";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginSignUp} />
      <ProtectedRoute exact path="/account" component={Profile} />

      <Route path="/submission" component={SubmissionForm} />
      <Route path="/adminMarkingS" component={MarkingSchem} />
      <Route path="/uploadT" component={AdminFileUpload} />
      <Route path="/readSubmission" component={ReadAllSubmissionSupervi} />
      <Footer />
    </Router>
  );
}

export default App;
