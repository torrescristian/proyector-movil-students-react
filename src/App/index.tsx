import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import DisplayPage from "../pages/DisplayPage";
import SharePage from "../pages/SharePage.tsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/compartir">
          <SharePage />
        </Route>
        <Route path="/">
          <DisplayPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
