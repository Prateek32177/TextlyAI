import "./App.css";
import Home from "./components/pages/Home";
import AskMe from "./components/OpenAi"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Overlay from "./components/Overlay";
function App() {
  return (
    <>
    <Overlay/>
   <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/classify" element={  <AskMe/>}></Route>
      </Routes>
       
        <Footer/>
     </div>
    </>
  );
}

export default App;
