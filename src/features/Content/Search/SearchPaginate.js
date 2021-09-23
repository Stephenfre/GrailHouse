import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

import "../TrendingShoes/Pagination/Pagination.css";

const Links = styled(NavLink)`
    text-decoration: none;
    color: black;
    &:hover {
        color: black;
    }
    &.active {
        color: white;
    }
`;

const SearchPaginate = ({ shoesPerPage, totalShoes, paginate }) => {
    const pageNumbers = [];
    const params = useParams();
    let shoeName = params.shoe;

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
                    <Links
                        to={`/search/${shoeName}/${number}`}
                        onClick={() => clickHandler(number)}
                        className="trending-page-link"
                        activeClassName="active"
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

export default SearchPaginate;
