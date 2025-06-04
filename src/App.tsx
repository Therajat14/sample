import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
// import EventsPage from './pages/EventsPage';
// import ParentsPage from './pages/ParentsPage';
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        {/* <Route path="/events" element={<EventsPage />} />
        <Route path="/parents-students" element={<ParentsPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
