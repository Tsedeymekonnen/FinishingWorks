import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Gallery from "./pages/Gallery";
import DesktopMain from "./pages/DesktopMain";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import MobileHome from "./pages/MobileHome";
import MobileGallery from "./pages/MobileGallery";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-main":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-home":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-gallery":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector<HTMLMetaElement>(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Dummy authentication logic, replace with actual authentication logic
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    if (email === "admin@gmail.com" && password === "12345678") {
      setLoggedIn(true);
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<DesktopMain />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      {/* Protect dashboard routes */}
      <Route
        path="/dashboard"
        element={loggedIn ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/dashboard1"
        element={loggedIn ? <Dashboard1 /> : <Navigate to="/sign-in" />}
      />
      <Route path="/mobile-home" element={<MobileHome />} />
      <Route path="/mobile-gallery" element={<MobileGallery />} />
    </Routes>
  );
}

export default App;

