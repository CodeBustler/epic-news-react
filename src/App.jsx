import moduleName from "module";
import { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import NewsBoard from "./components/Content/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // -------------------------------------------------------------------
  // ***************** FETCHING NEWS ARTICLES  *****************
  // -------------------------------------------------------------------
  const apiKey = "aa3aee0634fc497a830366c52cb6674d";

  useEffect(() => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const existedArticles = data.articles.filter(
          (item) => item.content !== "[Removed]",
        );
        console.log(data.articles);
        setNews(existedArticles);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category, apiKey]);

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} news={news} />
      <Footer />
    </>
  );
}

export default App;
