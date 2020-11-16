import './App.css';
import Header from './Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from './Banner';
import About from './About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*header*/}

        {/*About*/}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          {/*Our mission*/}
          {/*contact*/}
          {/*footer*/}
          <Route path="/">
            <Header />
            <Banner />
            
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
