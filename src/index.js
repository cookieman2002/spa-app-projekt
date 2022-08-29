import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Character from "./pages/Character";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
