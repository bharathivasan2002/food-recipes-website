import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Singleitem from './components/Singleitem';
import Searchcuisine from './components/Searchcuisine';
import Searchresult from './components/Searchresult';
import Searchfirstletter from './components/searchfirstletter';


function App() {
return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/searchresult/:id' element={<Searchresult/>}/>
  <Route path='/searchcuisine/:id' element={<Searchcuisine/>}/>
  <Route path='/singleitem/:id' element={<Singleitem/>}/>
  <Route path='/searchfirstletter/:id' element={<Searchfirstletter/>}/>
</Routes>

    </div>
  );
}

export default App;
