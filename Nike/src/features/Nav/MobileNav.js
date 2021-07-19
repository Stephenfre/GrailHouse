import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	li {
		padding: 18px 10px;
	}
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #fff;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
		top: 0;
		right: 0;
		height: 100vh;
		width: 100%;
		padding-top: 3.5rem;
		margin: 0;
		transition: transform 0.3s ease-in-out;
		li {
			color: black;
		}
	}
	z-index: 9998;
`;

const MobileNav = ({ open }) => {
	return (
		<Ul open={open}>
			<li>Home</li>
			<li>About Us</li>
			<li>Contact Us</li>
			<li>Sign In</li>
			<li>Sign Up</li>
		</Ul>
	);
};

export default MobileNav;
