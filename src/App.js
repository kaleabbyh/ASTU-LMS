import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/Courses";
import School from "./pages/School";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import Navbar from './components/AppBarResponsive';
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetail";
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/school" element={<School/>}/>
          <Route path="/courses" exact element={<Courses/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/courses/:id" element={<CourseDetail/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
