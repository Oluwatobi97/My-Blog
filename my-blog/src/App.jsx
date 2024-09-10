import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import BlogDetail from "./Page/BlogDetail";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
function App() {
  return (
    <>
      <div className="p-[7px] md:p-[20px] bg-gray-50">
        {/*Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog-detail" element={<BlogDetail />}></Route>
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
