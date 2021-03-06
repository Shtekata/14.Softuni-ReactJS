import './App.css';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Categories from './components/Categories';
import PetDetails from './components/PetDetails';
import Demo from './components/Demo/Demo';
import DemoFunc from './components/Demo/DemoFunc';
import CreatePet from './components/CreatePet';
import EditPetDetails from './components/EditPetDetails';
import EditPet from './components/EditPet';
import HooksUseState from './components/Hooks/HooksUseState';
import HooksUseEffect from './components/Hooks/HooksUseEffect/HooksUseEffect';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' component={Categories} />
        <Route path='/pets/details/:petId' exact component={PetDetails} />
        <Route path='/pets/details/:petId/edit' component={EditPetDetails} />
        <Route path='/pets/create' component={CreatePet} />
        <Route path='/demo' component={Demo} />
        <Route path='/demo-func' render={(x) => <DemoFunc {...x} anotherProps='props' />} />
        <Route path='/pets/:petId/edit' component={EditPet} />
        <Route path='/hooks/useState' component={HooksUseState} />
        <Route path='/hooks/useEffect/:id' component={HooksUseEffect} />
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
