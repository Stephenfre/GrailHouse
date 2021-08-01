import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./Pagination.css";

const Links = styled(Link)`
	text-decoration: none;
	color: black;
	&:hover {
		color: black;
	}
`;

const Pagination = ({ shoesPerPage, totalShoes, paginate }) => {
	const pageNumbers = [];
	const [isActive, setIsActive] = useState(false);

	for (let i = 1; i <= Math.ceil(totalShoes / shoesPerPage); i++) {
		pageNumbers.push(i);
	}

	const clickHandler = (pageNumber) => {
		paginate(pageNumber);
		setIsActive(!isActive);
	};

	return (
		<div className="pagination">
			<ul className="pagination-list">
				{pageNumbers.map((number) => (
					<Links
						to={`/trendingshoes/${number}`}
						onClick={() => clickHandler(number)}
						className={`page-link ${isActive ? "active" : "inactive"}`}
					>
						<li key={number} className="page-item">
							{number}
						</li>
					</Links>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
