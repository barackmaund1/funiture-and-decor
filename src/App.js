import './App.css';
import Header from './Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*header*/}
       
        <Header />

        {/*banner*/}
        <Banner />
        {/*About*/}
        {/*What we do*/}
        {/*Our mission*/}
        {/*contact*/}
        {/*footer*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
