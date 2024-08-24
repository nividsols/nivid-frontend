import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";
import Services from "./components/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import CaseStudyDetails from "./pages/CaseStudyDetails.jsx";
import axios from "axios";
import { BaseUrl } from "./BaseUrl.jsx";
import AdminRedirect from "./AdminRedirect.jsx";

const Layout = ({ children }) => {
  const [serviceData, setServiceData] = useState([]);
  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/apis/case-studies/`);
        setCaseStudyData(response.data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/apis/services/`)
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
      });
  }, []);

  return (
    <div className=" min-h-screen">
      <Navbar serviceData={serviceData} caseStudyData={caseStudyData} />
      <div className="pt-16">{children}</div>
      <Footer serviceData={serviceData} caseStudyData={caseStudyData} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Companies />
              <Services />
              <AboutUs />
              <CaseStudies />
            </Layout>
          }
        />
        <Route
          path="/service-detail/:title"
          element={
            <Layout>
              <ServiceDetail />
            </Layout>
          }
        />
        <Route
          path="/case-study-detail/:id"
          element={
            <Layout>
              <CaseStudyDetails />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
          <Route path="/admin" element={<AdminRedirect/>} />
      </Routes>
    </Router>
  );
}

export default App;
