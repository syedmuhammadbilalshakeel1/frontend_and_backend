import "./App.css";
import Signin from "./signin";
import Signup from "./signup";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";

/**
 * Home Component
 */
// const Home = () => {
//   return <h1>Home Page</h1>;
// };

// /**
//  * Contacts Component
//  */
// const Contacts = () => {
//   return <h1>Contact Page</h1>;
// };


function App() {
  
  
  return (
    <>
      {/* <BrowserRouter>
        <div className="navbar">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
         <Routes> */}
      {/* <Router> */}
      {/* <Switch> */}
      {/* <Signin /> */}
      {/* <Route path="/" component={Signin} /> */}
      {/* <Route path="/signup" component={Signup} /> */}
      {/* </Switch> */}
      {/* </Router> */}
      {/* </Routes>
       </BrowserRouter> */}
      {/* <Signup/> */}
      {/* <Signin/> */}
      {/* <Routes>/
         <Route path="/" element={<Signin />} />
         <Route path="/signup" element={<Signup />} />
       </Routes> */}
    </>
  );
}

export default App;
