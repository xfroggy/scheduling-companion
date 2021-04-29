import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DisplaySequencePage from "./pages/DisplaySequencePage";
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
              <Route path="/sequence/:sequenceId/edit" component={DisplaySequencePageEdit} />
              <Route path="/limits" component={DisplayLegalLimitsPage} />
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
