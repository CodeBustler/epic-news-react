import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const apiKey = import.meta.env.VITE_API_KEY;

function NewsBoard({ category }) {
	const [news, setNews] = useState([]);

	useEffect(() => {
		let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setNews(data.articles);
			})
			.catch((e) => console.log(e));
	}, [category]);

	return (
		<>
			<h3>Latest News</h3>
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
		</>
	);
}

export default NewsBoard;
