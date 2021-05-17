import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Main/Home";
import Messages from './Components/Main/Messages';
import Footer from "./Components/Main/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/messages" render={props => <Messages {...props} />} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
