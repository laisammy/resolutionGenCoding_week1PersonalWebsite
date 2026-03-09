import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import CatSection from "./Cat";

export default function App() {
  return (
    <div className="items-center p-10 bg-violet-400 space-y-4">
      <Navbar />
      <About />
      <Projects />
      <CatSection />

      <div className="items-center text-center gap-3 bg-violet-300 p-4 rounded-lg">
        <p>Thank you for visiting my website!</p>
        <p>
          Feel free to contact me at{" "}
          <a href="mailto:laihms667@gmail.com" className="text-blue-600 hover:underline">
            laihms667@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}