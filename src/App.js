import './App.css';
import 'antd/dist/antd.css';
import {
  Switch,
  Route,
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
      



      <Footer />
    </div>
  );
}

export default App;
