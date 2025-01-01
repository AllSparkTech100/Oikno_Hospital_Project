<<<<<<< HEAD
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Library from "./Library";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/library" element={<Library />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Pages;
=======
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Pages;
>>>>>>> ff6d8d9dbe329b41fe0f50b9260f17af2941d0b0
