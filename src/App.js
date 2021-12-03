// Router = to make it similar to all pages 
// Switch/Routes = a route at a time; different pages or routes that we want to have 

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Diets from './pages/Diets';
import Diet from './pages/Diet';
import DietListTypeComponent from './components/DietListTypeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Diets/>} />
          <Route path='/diet/:id' element={<Diet />} />
          <Route path='/dietType/:id' element={<DietListTypeComponent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
