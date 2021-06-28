import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import RasApp from './pages/RasApp';
import firebase from "./firebase/Firebase";
import "firebase/auth";
import Login from './pages/LogIn';
import Diagnostic from './pages/Diagnostic'



function App() {

  firebase.auth().onAuthStateChanged(user =>{
    console.log(user)
  });

  return (
    <>
 
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component=
          {RasApp}/>
          <Route path='/rasapp' exact component=
          {RasApp}/>
          <Route path='/sing-up' exact component=
          {Login}
          />
          <Route path='/herramienta' exact component=
          {Diagnostic}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
