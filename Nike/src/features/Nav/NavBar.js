import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import JordanLinks from "./Links/JordanLinks";
import NikeLinks from "./Links/NikeLinks";
import AdidasLinks from "./Links/AdidasLink";
import YeezyLinks from "./Links/YeezyLinks";
import MoreSneakLinks from "./Links/MoreSneakLinks";
import Account from "../Content/Account/Account";
import Burger from "./Burger";
import SearchForm from "../Content/Search/SearchForm";

import GrailHouse from "../../Svgs/GrailHouse.svg";
import "./NavBar.css";
import { Icon } from "@iconify/react";
import magnifyIcon from "@iconify/icons-mdi/magnify";

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

const Dropbtn = styled(Link)`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	&:hover {
		color: black;
		text-decoration: none;
	}
`;

const DropDownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	width: 60%;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 4;
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

export default function NavBar(props) {
	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);

	const menuClicked = () => setIsActive(!isActive);

	useEffect(() => {
		const pageClickEvent = (e) => {
			// If the active element exists and is clicked outside of
			if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
				setIsActive(!isActive);
			}
		};

		// If the item is active (ie open) then listen for clicks
		if (isActive) {
			window.addEventListener("click", pageClickEvent);
		}

		return () => {
			window.removeEventListener("click", pageClickEvent);
		};
	}, [isActive]);

	return (
		<div className="nav-container">
			<div className="nav-bar">
				<div className="nav-icon-mobile" onClick={() => setOpenSearch(!openSearch)}>
					<Icon icon={magnifyIcon} style={{ height: "2.5rem", width: "2.2rem", color: "white" }} />
				</div>
				<div className="search-bar-mobile">{openSearch && <SearchForm search={SearchForm} />}</div>
				<div className="nav-logo">
					<Link to="/">
						<img src={GrailHouse} alt="logo" />
					</Link>
				</div>
				<div className="nav-links-container">
					<StyledUl className="nav-list-ul">
						<DropDownLi className="nav-list-li">
							<Dropbtn to={`/nike`}>Nike</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<NikeLinks />
							</DropDownContent>
						</DropDownLi>
						<DropDownLi className="nav-list-li">
							<Dropbtn to={`/jordan`}>Jordan</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<JordanLinks />
							</DropDownContent>
						</DropDownLi>
						<DropDownLi className="nav-list-li">
							<Dropbtn to={`/adidas`}>Adidas</Dropbtn>
							<DropDownContent className="dropdown-content">
								{" "}
								<AdidasLinks />
							</DropDownContent>
						</DropDownLi>
						<DropDownLi className="nav-list-li">
							<Dropbtn to={`/yeezy`}>Yeezy</Dropbtn>
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
				<div className="nav-links-container-mobile">
					<Burger />
				</div>
				<div className="other-content">
					<StyledLinks onClick={menuClicked} className="menu-trigger">
						<span>Account</span>
					</StyledLinks>
					<nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
						<Account />
					</nav>
				</div>
			</div>
		</div>
	);
}
