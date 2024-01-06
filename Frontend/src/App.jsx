import Enroll from "./Components/Enroll";
import Navbar from "./Components/Navbar";
import Newsection from "./Components/Newsection";
import Newsection1 from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Together from "./Components/Together";
import Login from "./Components/Login";
import Joka from "./Components/Joka";
// import Todo from "./Components/todo/Todo";


function App() {



  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Newsection />} />
          <Route path="/Home/Enroll" element={<Enroll />} />
          <Route path="/newsection1" element={<Newsection1 />} />
          <Route path="/work" element={<Together />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/todo" element={<Todo/>}></Route> */}
        </Routes>
        <Joka />
      </Router >
    </>
  );
}

export default App;