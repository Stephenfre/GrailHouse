import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "./Pagination.css";

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
                {pageNumbers.map((number, index) => (
                    <Links
                        key={index}
                        to={`/trendingshoes/${number}`}
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

export default Pagination;
