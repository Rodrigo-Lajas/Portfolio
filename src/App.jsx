import { Button, Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';

const navArrayLinks = [
    {title: "Home", path: "/", icon: <HomeRoundedIcon />},
    {title: "Proyectos", path: "/projects", icon: <CodeRoundedIcon />},
    {title: "Skills", path: "/skills", icon: <CodeRoundedIcon />},
    {title: "Contacto", path: "/contact", icon: <ContactMailRoundedIcon />},
];


export default function App() {
    return (
        <>
            <NavBar navArrayLinks={navArrayLinks}/>
            <Container>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/Projects" element={< Projects />} />
                    <Route path="/Skills" element={<Skills />} />
                    <Route path="/Contact" element={<Contact />} />
                    
                </Routes>
                <h1>Mi portfolio</h1>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Container>
        </>
    )
}