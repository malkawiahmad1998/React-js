import logo from './logo.svg';
import './App.css';
import Paragraph from './newParagraph';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"


function App() {
  return(
    <BrowserRouter>
  <div>
    <ul>
      <Link to = "/newParagraph">gg </Link>
    </ul>
    <Routes>
      <Route path = "/newParagraph" element = {<Paragraph />}></Route>
    </Routes>  
  </div>

</BrowserRouter>
  )

}


export default App;

