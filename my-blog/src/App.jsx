import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import BlogDetail from "./Page/BlogDetail";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import TechnicalSkills from "./Component/TechnicalSkills";
import CareerGoals from "./Component/CareerGoals";
import Contact from "./Page/Contact";
import About from "./Page/About";
function App() {
  return (
    <>
      <div className="p-[7px] md:p-[20px] bg-gray-50">
        {/*Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog-detail" element={<BlogDetail />}></Route>
          <Route path="/TechnicalSkills" element={<TechnicalSkills />}></Route>
          <Route path="/CareerGoals" element={<CareerGoals />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
