import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopButton from "./components/Ui/TopButton";
import { SpeedInsights } from "@vercel/speed-insights/react";
export default function App() {
    return (
        <div className="flex flex-col h-screen font-sans">
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Footer />
            <TopButton />
            <SpeedInsights />
        </div>
    );
}
