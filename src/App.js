import Header1 from "./componets/header1";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Header1 />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
