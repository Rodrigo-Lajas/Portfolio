import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
    return (
        <div className="flex flex-col h-screen font-sans">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    {/* <Route path="/projects" element={<Projects />} /> */}
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
                <SpeedInsights />
            </BrowserRouter>
        </div>
    );
}
