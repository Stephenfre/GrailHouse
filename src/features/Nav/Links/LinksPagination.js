import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import "./LinksPagination.css";

const Links = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: none;
        color: black;
    }
`;

const LinksPagination = ({ shoesPerPage, totalShoes, paginate }) => {
    const pageNumbers = [];
    let { shoeName } = useParams();

    for (let i = 1; i <= Math.ceil(totalShoes / shoesPerPage); i++) {
        pageNumbers.push(i);
    }

    const clickHandler = (pageNumber) => {
        paginate(pageNumber);
    };

    return (
        <div className="links-pagination">
            <ul className="links-pagination-list">
                {pageNumbers.map((number) => (
                    <Links
                        to={`/shoe/${shoeName}/${number}`}
                        onClick={() => clickHandler(number)}
                        className="link-page-link"
                    >
                        <li key={number} className="link-page-item">
                            {number}
                        </li>
                    </Links>
                ))}
            </ul>
        </div>
    );
};

export default LinksPagination;
