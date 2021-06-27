import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import JordanLinks from "./JordanLinks";
import NikeLinks from "./NikeLinks";
import AdidasLinks from "./AdidasLink";
import YeezyLinks from "./YeezyLinks";
import MoreSneakLinks from "./MoreSneakLinks";
import Account from "../Content/Account/Account";

import GrailHouse from "../../Svgs/GrailHouse.svg";
import "./NavBar.css";

const StyledUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const StyledLi = styled.li`
	float: left;
`;

const Dropbtn = styled.div`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
`;

const DropDownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	width: 60%;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	right: 270px;
`;

const DropDownLi = styled(StyledLi)`
	display: inline-block;
	&:hover ${DropDownContent} {
		display: block;
	}
`;

const StyledLinks = styled(Link)`
	padding: 5px;
	text-align: center;
	text-decoration: none;
	font-size: 15px;
	color: white;

	&:hover {
		border-bottom: black solid 1px;
	}
`;
export default function NavBar() {
	const [accountClick, setAccountClick] = useState(false);

	return (
		<div className="nav-container">
			<div className="nav-bar">
				<div className="nav-logo">
					<Link to="/">
						<img src={GrailHouse} alt="logo" />
					</Link>
				</div>
				<div className="nav-links-container">
					<StyledUl className="nav-list-ul">
						<DropDownLi className="nav-list-li">
							<Dropbtn>Nike</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<NikeLinks />
							</DropDownContent>
						</DropDownLi>
						<DropDownLi className="nav-list-li">
							<Dropbtn>Jordan</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<JordanLinks />
							</DropDownContent>
						</DropDownLi>
						<DropDownLi className="nav-list-li">
							<Dropbtn>Adidas</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<AdidasLinks />
							</DropDownContent>
						</DropDownLi>
						<DropDownLi className="nav-list-li">
							<Dropbtn>Yeezy</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<YeezyLinks />
							</DropDownContent>
						</DropDownLi>
						<DropDownLi className="nav-list-li">
							<Dropbtn>More Sneakers</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<MoreSneakLinks />
							</DropDownContent>{" "}
						</DropDownLi>
					</StyledUl>
				</div>
				<div className="other-content">
					<StyledLinks onClick={() => setAccountClick(!accountClick)}>Account</StyledLinks>
				</div>
				<div className="account">{accountClick && <Account />}</div>
			</div>
		</div>
	);
}
