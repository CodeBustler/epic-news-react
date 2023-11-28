import React from "react";
import news from "./news.jpg";

function NewsCard({ imageUrl, title, description, readMore, source }) {
	return (
		<div className="card" style={{ width: "25rem" }}>
			<img src={imageUrl ? imageUrl : news} className="card-img-top" />
			<div className="card-body">
				<div>
					<h5 className="card-title">{title.slice(0, 70)} ...</h5>
					<p className="card-text">
						{description
							? description
							: "No details found! click on Read More"}
					</p>
					<p style={{ color: "gray" }}>Source : {source}</p>
				</div>
				<a href={readMore} className="btn btn-primary" target="_blank">
					Read More
				</a>
			</div>
		</div>
	);
}

export default NewsCard;
