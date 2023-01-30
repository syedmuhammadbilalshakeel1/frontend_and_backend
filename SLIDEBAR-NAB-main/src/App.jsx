import "./App.css";
import Signin from "./signin";
import Signup from "./signup";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";



function App() {
  
  
  return (
    <>
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    
    </>
  );
}

export default App;
