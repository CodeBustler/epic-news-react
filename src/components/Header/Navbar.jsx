import React from "react";

function Navbar({ setCategory }) {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<div
					className="navbar-brand"
					onClick={() => setCategory("general")}
				>
					<i className="fa-solid fa-newspaper"></i> Epic
					<span>News</span>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<ul className="navbar-nav">
						<li>
							<div
								className="nav-link"
								onClick={() => {
									setCategory("general");
									console.log("object");
								}}
							>
								General
							</div>
						</li>
						<li>
							<div
								className="nav-link"
								onClick={() => setCategory("technology")}
							>
								Technology
							</div>
						</li>
						<li>
							<div
								className="nav-link"
								onClick={() => setCategory("entertainment")}
							>
								Entertainment
							</div>
						</li>
						<li>
							<div
								className="nav-link"
								onClick={() => setCategory("health")}
							>
								Health
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
