import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/layout/ScrollToTop";

import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Help from "../pages/Help";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Events from "../pages/Events";
import Donations from "../pages/Donations";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";

import ProgramDetail from "../components/program/ProgramDetail";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/nosotros" element={<About />} />

          <Route path="/programas" element={<Programs />} />

          <Route
            path="/programas/:id"
            element={<ProgramDetail />}
          />

          <Route path="/ayudar" element={<Help />} />

          <Route path="/galeria" element={<Gallery />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/eventos" element={<Events />} />

          <Route path="/donaciones" element={<Donations />} />

          <Route path="/contacto" element={<Contact />} />

          <Route path="/faq" element={<Faq />} />

        </Route>

      </Routes>
    </AnimatePresence>
  );
}

function AppRouter() {
  return (
    <BrowserRouter basename="/fundacion-vida-dulce">

  <ScrollToTop />

  <AnimatedRoutes />

</BrowserRouter>
  );
}

export default AppRouter;