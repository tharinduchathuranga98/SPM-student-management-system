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

//Supi - research topic, request supervisor/co-supervisor
import createResearchTopic from './component/Topic/createResearchTopic';
import researchTopicDetails from './component/Topic/researchTopicDetails';
import researchTopicHome from './component/Topic/researchTopicHome';
import editResearchTopic from './component/Topic/editResearchTopic';
import supervisorEmailer from './component/Topic/supervisorEmailer';
import researchTopicReport from './component/Topic/researchTopicReport';
import supervisorFieldsCreate from './component/Topic/supervisorFields/supervisorFieldsCreate';
import supFieldsRetrieve from './component/Topic/supervisorFields/supFieldsRetrieve';
import coSupFieldsCreate from './component/Topic/coSupervisorFields/coSupFieldsCreate';
import coSupervisorRetrieve from './component/Topic/coSupervisorFields/coSupervisorRetrieve';

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

      {/*Supi - research topic, request supervisor/co-supervisor*/}
      <Route path = "/topicHome" exact component = {researchTopicHome}></Route>
        <Route path = "/add" exact component = {createResearchTopic}></Route>
        <Route path = "/edit/:id" exact component = {editResearchTopic}></Route>
        <Route path = "/post/:id" exact component = {researchTopicDetails}></Route>
        <Route path="/email" exact component={supervisorEmailer}></Route>
        <Route path="/topicsReport" exact component={researchTopicReport}></Route>
        <Route path="/addSup" exact component={supervisorFieldsCreate}></Route>
        <Route path="/supervisorhome" exact component={supFieldsRetrieve}></Route>        
        <Route path="/addCoSup" exact component={coSupFieldsCreate}></Route>
        <Route path="/coSupervisorhome" exact component={coSupervisorRetrieve}></Route>

      <Footer />
    </Router>
  );
}

export default App;
