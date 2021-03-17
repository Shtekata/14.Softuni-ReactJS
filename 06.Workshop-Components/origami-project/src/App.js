import { Component } from 'react';
import x from './App.module.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className={x.app}>
        <Header />
        <div className={x.conteiner}>
          <Aside></Aside>
          <Main></Main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
