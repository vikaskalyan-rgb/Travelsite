import About from './About/About';
import './App.css';
import Explore from './Explore/Explore';
import ExploreCard from './Explore/ExploreCard';
import Food from './Food/Food';
import Homepage from './Homepage/Homepage';
import Logging from './LogReg/Logging';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Contact from './Contactus/ContactUs';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/appit" element={<Logging/>}></Route>
        <Route exact path="/food" element={<Food/>}></Route>
        <Route exact path="/explore" element={<Explore/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    
    </Router>
    </div>
  );
}

export default App;
