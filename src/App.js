// Router = to make it similar to all pages 
// Switch/Routes = a route at a time; different pages or routes that we want to have 

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Diets from './pages/Diets';
import DietComponent from './components/DietComponent';
import DietListTypeComponent from './components/DietListTypeComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import UserComponent from './components/UserComponent';
import UserDietsComponent from './components/UserDietsComponent';
import UserWeightHappinessComponent from './components/UserWeightHappinessComponent';
import UserFormComponent from './components/UserFormComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Diets/>} />
          <Route path='/diet/:id' element={<DietComponent />} />
          <Route path='/dietType/:id' element={<DietListTypeComponent/>} />
          {/* <Route path='/user/:id' element={<Diet />} /> */}
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/register' element={<RegisterComponent />} />
          <Route path='/users/:id' element={<UserComponent />} />
          <Route path='/users/:id/diets' element={<UserDietsComponent />} />
          <Route path='/users/:id/updates' element={<UserWeightHappinessComponent />} />
          <Route path='/users/:id/form' element={<UserFormComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
