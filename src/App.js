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
import LogoutComponent from './components/LogoutComponent';
import AllUsersComponent from './components/AllUsersComponent';
import AllBillingsComponent from './components/AllBillingsComponent';
import AllDietsComponent from './components/AllDietsComponent';
import AllDietsUpdateComponent from './components/AllDietsUpdateComponent';
import FactTablesComponent from './componentsDW/FactTablesComponent';
import ReportsComponent from './componentsDW/ReportsComponent';

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
          <Route path='/logout' element={<LogoutComponent />} />
          <Route path='/users/:id/allusers' element={<AllUsersComponent />} />
          <Route path='/users/:id/allbillings' element={<AllBillingsComponent />} />
          <Route path='/users/:id/alldiets' element={<AllDietsComponent />} />
          <Route path='/users/:id/alldiets/:dietId' element={<AllDietsUpdateComponent />} />
          <Route path='/users/:id/alldiets/:dietId' element={<AllDietsUpdateComponent />} />
          <Route path='/users/:id/facttables' element={<FactTablesComponent />} />
          <Route path='/users/:id/reports' element={<ReportsComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
