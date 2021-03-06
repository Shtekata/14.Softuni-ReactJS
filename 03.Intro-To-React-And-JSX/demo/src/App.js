import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Lorem from './components/Lorem';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header>Hello React World From App Component</Header>
      <Header>Second Header</Header>
      <main>
        <Lorem />
        <Lorem />
        <Lorem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
