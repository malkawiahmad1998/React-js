import logo from './logo.svg';
import './App.css';
import Para from './para';
import ClassPage from './Components/classComponent';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Counter from './Components/Counter';
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

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
        </div>
        <Button variant="contained">Hello world</Button>
  export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}

        <Routes>
          <Route path = "/para" element = {<Para />}></Route>
          <Route path = "/classComponent" element = {<ClassPage />}></Route>
          <Route path = "/Counter" element = {<Counter />}></Route>

        </Routes>  
      

    </BrowserRouter>
  )

}


export default App;

