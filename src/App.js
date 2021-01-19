import logo from './logo.svg';
import './App.css';
import AllNameInfo from './Components/AllNameInfo/AllNameInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UpdateComment from './Components/UpdateComment/UpdateComment';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/">
    <AllNameInfo></AllNameInfo>
    
    </Route>
    
    <Route path="/edit/:id">
    <UpdateComment></UpdateComment>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
