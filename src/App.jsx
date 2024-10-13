import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFoundPage from "./components/404Page";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
    return (
        <div className="flex flex-col h-screen font-sans">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} key={"hero"} />
                    <Route path="/about" element={<About />} key={"about"} />
                    <Route path="/education" element={<Education />} key={"education"} />
                    <Route path="/projects" element={<Projects />} key={"projects"} />
                    <Route path="/contact" element={<Contact />} key={"contact"} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
                <SpeedInsights />
                <Analytics />
            </BrowserRouter>
        </div>
    );
}
