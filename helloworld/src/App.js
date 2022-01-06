import logo from './logo.svg';
import './App.css';
import hello from './components/hello';
function App() {
  return (
    <div className="App">
      {/* <hello /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello india
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
