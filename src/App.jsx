import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import AboutUs from "./About/AboutUs/AboutUs";
import History from "./History/History";
import InterConference from "./Conference/InterConference/InterConference";
import Host from "./Conference/Host/Host";
import Navbar from "./Home/Navbar/Navbar";
import Footer from "./Home/Footer/Footer";
import Advertise from "./Conference/Advertise/Advertise";
import Presentation from "./Conference/Presentation/Presentation";
import Awards from "./Conference/Awards/Awards";
import Login from "./Login/Login";
import Journals from "./Journals/Journals";
import Student from "./Student/Student";
import Professional from "./Professional/Professional";
import Institutional from "./Institutional/Institutional";
import Assistance from "./Assistance/Assistance";
import Contact from "./Contact/Contact";
import Board from "./Board/Board";
import CPAMembers from './CPA Members/CPAMembers'
import Payment from "./Payment/Payment";
import SDG from "./Conference/SDG/SDG.JSX";
import Corporate from "./Corporate/Corporate";
import StudentMembershipForm from "./Student/StudentMembershipForm";
import Career from "./Careers/Career";
import CareerForm from "./Careers/CareerForm";
import Success from "./Payment/Success";
import Dashboard from "./Dashboard/Dashboard";
import Admin from "./Admin/Admin";
import Register from "./Register/Register";
import AmbassadorRegistration from "./CPA Dash/Ambassadorregistration";
import AmbassadorLogin from "./CPA Dash/Ambassadorlogin";
import AmbassadorDashboard from "./CPA Dash/Ambassadordashboard";
import AmbassadorForgotPassword from "./CPA Dash/Ambassadorforgotpassword";
import AmbassadorResetPassword from "./CPA Dash/Ambassadorresetpassword";
import AdminPanel from "./CPA Dash/Adminpanel";
import StudentMembership from "./Register/StudentMembership";
import ProfessionalMembership from "./Register/ProfessionalMembership";
import InstitutionalMembership from "./Register/InstitutionalMembership";
import CorporateMembership from "./Register/CorporateMembership";
import Academic from "./About/Academic";
import Pastconference from "./Conference/pastConference/Pastconference";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import TermsCondition from "./Payment/TermsCondition";
import Blog from "./Blog/Blog";
import Blog2 from "./Blog/Blog2";
import Blog3 from "./Blog/Blog3";
import Blog4 from "./Blog/Blog4";
import Blog5 from "./Blog/Blog5";
import Blog6 from "./Blog/Blog6";
import Blog7 from "./Blog/Blog7";
import Blog8 from "./Blog/Blog8";
import Blog9 from "./Blog/Blog9";
import IcsteetGallery from "./Conference/pastConference/IcsteetGallery";
import IcsteetConference from "./Conference/pastConference/IcsteetConference";
import ConferenceList from "./Conference/pastConference/ConferenceList";
import Icsap2025Conference from "./Conference/pastConference/Icsap2025Conference";
import IcsapGallery from "./Conference/pastConference/IcsapGallery";
import WcmrpConference from "./Conference/pastConference/Wcmrp2025Conference";
import IcabmetConference from "./Conference/pastConference/Icabmet2025conference";
import IcetmrsConference from "./Conference/pastConference/Icetmrs2025conference";
import ApceeshConference from "./Conference/pastConference/ApceeshConference";
import ApceeshGallery from "./Conference/pastConference/ApceeshGallery";

const App = () => {
  const Layout = ({ children }) => {
    const location = useLocation();
    const noNavbarFooterRoutes = [
      "/Dashboard%20qPv71759AG93PB7a3q06H8EV",
      "/login",
      "/payment-success",
      "/Admin-Dashboard%20qPv71759AG93PB7a3q06H8EV",
      "/register",
      "/student-membership",
      "/professional-membership",
      "/institutional-membership",
      "/corporate-membership",
    ];
    const showNavbarFooter = !noNavbarFooterRoutes.includes(location.pathname);

    return (
      <>
        {showNavbarFooter && <Navbar />}
        <div className={showNavbarFooter ? "commonMarginTop" : ""}>
          {children}
        </div>
        {showNavbarFooter && <Footer />}
      </>
    );
  };

  const [Isvisible, setIsvisible] = useState(false);

  const handlePopup = (e) => {
    setIsvisible(e);

    // ONLY apply scroll lock on DESKTOP (above 768px)
    if (window.innerWidth > 768) {
      if (e) {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    // On mobile: DO NOTHING - let natural scrolling work
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("hidden");
      document.body.classList.remove("popup-open");
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollTop />
      {Isvisible && (
        <div>
          <CareerForm handlePopup={handlePopup} />
        </div>
      )}
      <Routes>
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/student-membership"
          element={
            <Layout>
              <StudentMembership />
            </Layout>
          }
        />
        <Route
          path="/professional-membership"
          element={
            <Layout>
              <ProfessionalMembership />
            </Layout>
          }
        />
        <Route
          path="/institutional-membership"
          element={
            <Layout>
              <InstitutionalMembership />
            </Layout>
          }
        />
        <Route
          path="/corporate-membership"
          element={
            <Layout>
              <CorporateMembership />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/our-associates-and-partners"
          element={
            <Layout>
              <Academic />
            </Layout>
          }
        />
        <Route
          path="/history"
          element={
            <Layout>
              <History />
            </Layout>
          }
        />
        <Route
          path="/sdg"
          element={
            <Layout>
              <SDG />
            </Layout>
          }
        />
        <Route
          path="/conference"
          element={
            <Layout>
              <InterConference />
            </Layout>
          }
        />
        <Route
          path="/past-conferences"
          element={
            <Layout>
              <Pastconference />
            </Layout>
          }
        />
        <Route
          path="/host-conference"
          element={
            <Layout>
              <Host />
            </Layout>
          }
        />
        <Route
          path="/advertise"
          element={
            <Layout>
              <Advertise />
            </Layout>
          }
        />
        <Route
          path="/presentation"
          element={
            <Layout>
              <Presentation />
            </Layout>
          }
        />
        <Route
          path="/awards"
          element={
            <Layout>
              <Awards />
            </Layout>
          }
        />
        <Route
          path="/advisory-board"
          element={
            <Layout>
              <Board />
            </Layout>
          }
        />
        <Route
          path="/cpa-members"
          element={
            <Layout>
              <CPAMembers />
            </Layout>
          }
        />
        <Route
          path="/journals"
          element={
            <Layout>
              <Journals />
            </Layout>
          }
        />
        <Route
          path="/student"
          element={
            <Layout>
              <Student />
            </Layout>
          }
        />
        <Route
          path="/professional"
          element={
            <Layout>
              <Professional />
            </Layout>
          }
        />
        <Route
          path="/institutional"
          element={
            <Layout>
              <Institutional />
            </Layout>
          }
        />
        <Route
          path="/corporate"
          element={
            <Layout>
              <Corporate />
            </Layout>
          }
        />
        <Route
          path="/membership-enquire-form"
          element={
            <Layout>
              <StudentMembershipForm />
            </Layout>
          }
        />
        <Route
          path="/assistance"
          element={
            <Layout>
              <Assistance />
            </Layout>
          }
        />
        <Route
          path="/payment"
          element={
            <Layout>
              <Payment />
            </Layout>
          }
        />
        <Route
          path="/terms-and-condition"
          element={
            <Layout>
              <TermsCondition />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/careers"
          element={
            <Layout>
              <Career handlePopup={handlePopup} />
            </Layout>
          }
        />
        <Route
          path="/icsteet-conference-2025-gallery"
          element={
            <Layout>
              <IcsteetGallery />
            </Layout>
          }
        />
        <Route
          path="/apceesh-conference-2025-gallery"
          element={
            <Layout>
              <ApceeshGallery />
            </Layout>
          }
        />
        <Route
          path="/icsteet-conference-2025"
          element={
            <Layout>
              <IcsteetConference />
            </Layout>
          }
        />
        <Route
          path="/apceesh-conference-2025"
          element={
            <Layout>
              <ApceeshConference />
            </Layout>
          }
        />
        <Route
          path="/icsap-conference-2025"
          element={
            <Layout>
              <Icsap2025Conference />
            </Layout>
          }
        />
        <Route
          path="/icsap-conference-2025-gallery"
          element={
            <Layout>
              <IcsapGallery />
            </Layout>
          }
        />
        <Route
          path="/wcmrp-conference-2025"
          element={
            <Layout>
              <WcmrpConference />
            </Layout>
          }
        />
        <Route
          path="/icabmet-conference-2025"
          element={
            <Layout>
              <IcabmetConference />
            </Layout>
          }
        />
        <Route
          path="/icetmrs-conference-2025"
          element={
            <Layout>
              <IcetmrsConference />
            </Layout>
          }
        />
        <Route
          path="/past-conference-list-2025"
          element={
            <Layout>
              <ConferenceList />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/check-scopus-indexed-journals-online"
          element={
            <Layout>
              <Blog2 />
            </Layout>
          }
        />
        <Route
          path="/importance-of-continuing-professional-development-program"
          element={
            <Layout>
              <Blog3 />
            </Layout>
          }
        />
        <Route
          path="/attend-a-cerada-international-conference-in-2026"
          element={
            <Layout>
              <Blog4 />
            </Layout>
          }
        />
        <Route
          path="/how-to-check-web-of-science-indexed-journals-online"
          element={
            <Layout>
              <Blog5 />
            </Layout>
          }
        />
        <Route
          path="/how-to-write-and-publish-a-scientific-paper"
          element={
            <Layout>
              <Blog6 />
            </Layout>
          }
        />
        <Route
          path="/writing-case-studies-science-of-delivery"
          element={
            <Layout>
              <Blog7 />
            </Layout>
          }
        />
        <Route
          path="/how-to-write-a-successful-research-paper"
          element={
            <Layout>
              <Blog8 />
            </Layout>
          }
        />
        <Route
          path="/how-to-write-a-research-proposal"
          element={
            <Layout>
              <Blog9 />
            </Layout>
          }
        />
        <Route
          path="/payment_success"
          element={
            <Layout>
              <Success />
            </Layout>
          }
        />
        <Route
          path="/dashboard qPv71759AG93PB7a3q06H8EV"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/admin-dashboard qPv71759AG93PB7a3q06H8EV"
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />
        {/* CPA Dashboard */}
        <Route
          path="/ambassador/register"
          element={<AmbassadorRegistration />}
        />
        <Route path="/ambassador/login" element={<AmbassadorLogin />} />
        <Route path="/ambassador/dashboard" element={<AmbassadorDashboard />} />
        <Route
          path="/ambassador/forgot-password"
          element={<AmbassadorForgotPassword />}
        />
        <Route
          path="/ambassador/reset-password/:token"
          element={<AmbassadorResetPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
