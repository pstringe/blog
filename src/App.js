import Navbar from './Navbar';
import Create from './Create';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path = '/'> <Home /> </Route>
          <Route path = '/create'> <Create /> </Route>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
