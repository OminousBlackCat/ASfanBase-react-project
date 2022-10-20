import logo from './logo.svg';
import './App.css';

import LoginAndRegister from "./views/Login&Register"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginAndRegister/>
      </header>
    </div>
  );
}


export default App;
