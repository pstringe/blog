import Navbar from './Navbar';
import Create from './Create';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PostDetails from './PostDetails';

function App() {
  const title = 'Blog Title Goes Here';
  return (
    <Router>
      <div className="App">
          <Navbar title={title}/>
          <Switch>
            <Route exact path = '/'> <Home /> </Route>
            <Route path = '/create'> <Create /> </Route>
            <Route path = '/posts/:id'> <PostDetails /> </Route>
          </Switch>
      </div>
    </Router>

  );

}

export default App;
