import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import PetDetails from './components/PetDetails';
import Demo from './components/Demo/Demo';
import DemoFunc from './components/Demo/DemoFunc';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' component={Categories} />
        <Route path='/pets/details/:petId' component={PetDetails} />
        <Route path='/demo' component={Demo} />
        <Route path='/demo-func' component={DemoFunc} />
      </Switch>
      <Footer />
      <style jsx>{`
      .container{
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      `}</style>
    </div>
  );
}

export default App;
