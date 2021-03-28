import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header'
import Search from './Components/Movies/Search'
import Footer from './Components/Footer'
import Card from './Components/Movies/Card'
import Carousel from './Components/Movies/Carousel'

function App() {
  return (
    <div className="App">
      <Header />


      <Router>
        <Search />

          <Switch>
            <Route exact path="/">
              <Carousel />
            </Route>
            <Route path="/cards">
              <Card />
            </Route>
            <Route path="/carousel">
              <Carousel />
            </Route>
          </Switch>
      </Router>



      <Footer />
    </div>
  );
}

export default App;
