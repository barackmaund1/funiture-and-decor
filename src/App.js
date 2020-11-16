import './App.css';
import Header from './Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from './Banner';
import About from './About';
import Value from './Value';
import { Contact } from './Contact';
import Footer from './Footer';
import About1 from './components/About1';
import Contact1 from './components/Contact1';
import Value1 from './components/Value1';


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
          <Route path="/our_values">
            <Value />
          </Route>
          <Route path="/contact_us">
            <Contact/>
          </Route>
          {/*contact*/}
          {/*footer*/}
          <Route path="/">
            <Header />
            <Banner />
            <About1/>
            <Value1/>
            <Contact1/>
            <Footer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
