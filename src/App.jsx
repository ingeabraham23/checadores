// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Perfiles from "./components/Perfiles";
import Chedraui from "./components/Chedraui";
import Notificacion from "./components/Notificacion";
import Internado from "./components/Internado";
import Empleo from "./components/Empleo";
import Curso from "./components/Curso";


function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Perfiles />} />
            <Route path="/internado" element={<Internado />} />
            <Route path="/chedraui" element={<Chedraui />} />
            <Route path="/notificacion" element={<Notificacion />} />
            <Route path="/empleo" element={<Empleo />} />
            <Route path="/curso" element={<Curso />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;