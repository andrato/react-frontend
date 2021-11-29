// Router = to make it similar to all pages 
// Switch/Routes = a route at a time; different pages or routes that we want to have 

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" exact component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
