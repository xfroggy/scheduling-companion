import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DisplaySequencePage from "./pages/DisplaySequencePage";
import ManualDutyPeriodFormPage from "./pages/ManualDutyPeriodFormPage";
import DisplaySequencePageEdit from "./pages/DisplaySequencePageEdit";
import DisplayLegalLimitsPage from "./pages/DisplayLegalLimitsPage";
import Navbar from "./components/Navbar";
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import { ContextProvider } from './context/AppContext';
import theme from './partials/theme';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <div className="display-sequence__container">
          <ThemeProvider theme={theme}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/sequence/:sequenceId" component={DisplaySequencePage} />
              <Route exact path="/sequence/:sequenceId/edit" component={ManualDutyPeriodFormPage} />
              <Route exact path="/limits" component={DisplayLegalLimitsPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
