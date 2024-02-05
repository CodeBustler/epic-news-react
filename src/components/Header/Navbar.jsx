import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ setCategory }) {
	const handleNavItemClick = (category) => {
		setCategory(category);
		document.getElementById("navbarNavAltMarkup").classList.remove("show"); // Close the navbar
	};

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
			<div className="container-fluid">
				<div
					className="navbar-brand"
					onClick={() => {
						handleNavItemClick("general");
						window.scrollTo(0, 0);
					}}
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
					{/*NAV LINKS*/}
					<ul className="navbar-nav">
						<li
							className="nav-link "
							onClick={() => handleNavItemClick("general")}
						>
							General
						</li>
						<li
							className="nav-link"
							onClick={() => handleNavItemClick("technology")}
						>
							Technology
						</li>
						<li
							className="nav-link"
							onClick={() => handleNavItemClick("entertainment")}
						>
							Entertainment
						</li>
						<li
							className="nav-link"
							onClick={() => handleNavItemClick("health")}
						>
							Health
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
