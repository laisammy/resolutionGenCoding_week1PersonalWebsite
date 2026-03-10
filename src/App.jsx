import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="items-center p-10 bg-violet-400 space-y-4">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}