import {BrowserRouter} from 'react-router-dom';
import { Route, Routes,} from 'react-router-dom';
import Load from './component/Article/Load';

const Rout=()=>{
  return(
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<Load/>}/> 
        </Routes>
    </BrowserRouter>
  )

}

function App() {
  
  return (
    <div className="app">
        <Rout/>
    </div>
  );
}

export default App;
