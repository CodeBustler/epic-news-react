import moduleName from "module";
import { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import NewsBoard from "./components/Content/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </>
  );
}

export default App;
