import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Main/Home";
import Messages from './Components/Main/Messages';
import Footer from "./Components/Main/Footer";
import UploadExample from './Components/Main/UploadExample';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/messages" render={props => <Messages {...props} />} />
          <Route path="/upload-example" render={props => <UploadExample {...props} />} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
