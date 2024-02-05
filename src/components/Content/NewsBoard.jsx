import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

function NewsBoard({ category, news }) {
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
