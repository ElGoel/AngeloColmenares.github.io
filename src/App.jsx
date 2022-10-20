import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Education from "./components/pages/Education";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import { PaletteProvider } from "./themes/palette";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [pagesValue, setPagesValue] = React.useState('');

  return (
    <PaletteProvider>
      <Router className="App">
        <CssBaseline />
        <NavBar pagesValue={pagesValue} setPagesValue={setPagesValue} />
        <Container>
          <Routes>
            <Route path="/" element={<Home pagesValue={pagesValue} setPagesValue={setPagesValue} />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>
      </Router>
    </PaletteProvider>
  );
}

export default App;
