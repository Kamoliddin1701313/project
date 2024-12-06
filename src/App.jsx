import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Layouts from "./components/layouts/Layouts";
import ServicesPage from "./pages/services/ServicesPage";
import PagesPage from "./pages/pages/PagesPage";
import ContactPage from "./pages/contact/ContactPage";
import BlogPage from "./pages/blog/BlogPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pages" element={<PagesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
