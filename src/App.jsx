import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.jsx";
import Projects from "./Projects/Projects.jsx"

function About() {
  return <h2>About</h2>;
}

function Resume() {
    return <h2>Resume</h2>
}

export default function App() {
  return (
    <BrowserRouter basename="/rainers_portfolio">  {/* Wraps everything that uses routing */}
      <Nav />
      <Routes>
        <Route path="/*" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}