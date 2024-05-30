import logo from './logo.svg';
import './App.css';
import Paragraph from './newParagraph';
import newImage from './newImage';

import {BrowserRouter,Link,Route,Routes} from "react-router-dom"


function App() {
  return(
    <BrowserRouter>
  <div>
    <ul>
      <Link to = "/newImage">gg </Link>
    </ul>
    <Routes>
      <Route path = "/newImage" element = {<newImage />}></Route>
    </Routes>  
  </div>

</BrowserRouter>
  )

}


export default App;

