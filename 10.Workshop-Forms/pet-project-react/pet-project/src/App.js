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

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' component={Categories} />
        <Route path='/pets/details/:petId' exact component={PetDetails} />
        <Route path='/pets/details/:petId/edit' component={EditPetDetails} />
        <Route path='/pets/create' component={CreatePet}/>
        <Route path='/demo' component={Demo} />
        <Route path='/demo-func' render={(x) => <DemoFunc {...x} anotherProps='props'/>} />
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
