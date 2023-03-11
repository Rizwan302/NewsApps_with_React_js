import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const pageSize = 9;
  return (
    <div className="App">
      <Router>
      <Navbar/>
      {/* <News pageSize={pageSize} country='in' category='science' language='en'/> */}
      <Switch>
        <Route exact path="/"><News key="tops" pageSize={pageSize} country='in' category='top' language='en'/></Route>
        <Route exact path="/business"><News key="business" pageSize={pageSize} country='in' category='business' language='en'/></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} country='in' category='entertainment' language='en'/></Route>
        <Route exact path="/environment"><News key="environment" pageSize={pageSize} country='in' category='environment' language='en'/></Route>
        <Route exact path="/food"><News key="food" pageSize={pageSize} country='in' category='food' language='en'/></Route>
        <Route exact path="/health"><News key="health" pageSize={pageSize} country='in' category='health' language='en'/></Route>
        <Route exact path="/politics"><News key="politics" pageSize={pageSize} country='in' category='politics' language='en'/></Route>
        <Route exact path="/science"><News key="science" pageSize={pageSize} country='in' category='science' language='en'/></Route>
        <Route exact path="/sports"><News key="sports" pageSize={pageSize} country='in' category='sports' language='en'/></Route>
        <Route exact path="/technology"><News key="technology" pageSize={pageSize} country='in' category='technology' language='en'/></Route>
        <Route exact path="/top"><News key="top" pageSize={pageSize} country='in' category='top' language='en'/></Route>
        <Route exact path="/world"><News key="world" pageSize={pageSize} country='in' category='world' language='en'/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;


