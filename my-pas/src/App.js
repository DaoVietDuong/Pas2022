import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Login from "./pages/login";

function App() {

return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />}>
        </Route>
        <Route path="/home" index element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
