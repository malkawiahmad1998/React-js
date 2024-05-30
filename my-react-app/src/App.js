import logo from './logo.svg';
import './App.css';
import Para from './para';
import ClassPage from './Components/classComponent';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Counter from './Components/Counter';

function App() {
  return(
    <BrowserRouter>
      <div>
        <ul>
          <Link to = "/para">Para</Link>
          <br></br>
          <Link to = "/classComponent">Class Component</Link>
          <br></br>
          <Link to = "/Counter">Counter</Link>

        </ul>
        <Routes>
          <Route path = "/para" element = {<Para />}></Route>
          <Route path = "/classComponent" element = {<ClassPage />}></Route>
          <Route path = "/Counter" element = {<Counter />}></Route>

        </Routes>  
      </div>

    </BrowserRouter>
  )

}


export default App;

