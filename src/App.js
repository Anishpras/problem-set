import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProblemForm from "./ProblemForm";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <ProblemForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
