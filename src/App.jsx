import moduleName from "module";
import { useState } from "react";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import NewsBoard from "./components/Content/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      dark
      <NewsBoard category={category} />
      <Footer />
    </>
  );
}

export default App;
