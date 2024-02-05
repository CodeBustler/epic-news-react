import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const apiKey = import.meta.env.VITE_API_KEY;

function NewsBoard({ category }) {
	const [news, setNews] = useState([]);
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
		<div style={{ paddingTop: "20px" }}>
			<h3 style={{ textTransform: "capitalize" }}>
				Latest News :{" "}
				<span style={{ color: "tomato" }}>{category}</span>
			</h3>
			<div className="news-container">
				{news.length > 0 ? (
					news.map((article, index) => {
						return (
							<NewsCard
								key={index}
								title={article.title}
								description={article.description}
								imageUrl={article.urlToImage}
								pubilishedAt={article.pubilishedAt}
								source={article.source.name}
								readMore={article.url}
							/>
						);
					})
				) : (
					<div className="text-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default NewsBoard;
