import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Inventory System
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default App;
