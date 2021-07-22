import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./Pagination.css";

const Links = styled(Link)`
	text-decoration: none;
	color: black;
`;

const Pagination = ({ shoesPerPage, totalShoes, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalShoes / shoesPerPage); i++) {
		pageNumbers.push(i);
	}

	const clickHandler = (pageNumber) => {
		paginate(pageNumber);
	};

	return (
		<div className="pagination">
			<ul className="pagination-list">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<Links
							to={`/trendingshoes/${number}`}
							onClick={() => clickHandler(number)}
							className="page-link"
						>
							{number}
						</Links>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
