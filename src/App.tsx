import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Gallery from "./pages/Gallery";
import DesktopMain from "./pages/DesktopMain";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import MobileHome from "./pages/MobileHome";
import MobileGallery from "./pages/MobileGallery";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

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
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DesktopMain />} />
      <Route path="/gallery" element={<DesktopMain />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard1" element={<Dashboard1 />} />
      <Route path="/mobile-home" element={<MobileHome />} />
      <Route path="/mobile-gallery" element={<MobileGallery />} />
    </Routes>
  );
}
export default App;
