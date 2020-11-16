import './App.css';
import Header from './Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*header*/}
        <Header />
        {/*banner*/}
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
