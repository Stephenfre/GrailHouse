import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { searchShoes } from "../../../actions";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import magnifyIcon from "@iconify/icons-mdi/magnify";

import "./Search.css";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

function Search(props) {
	const [searchValue, setSearchValue] = useState("");
	const classes = useStyles();

	let history = useHistory();

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue("");
	};

	const callSearchFunction = () => {
		// e.preventDefault();
		props.searchShoes(searchValue);
		history.push(`search/${searchValue}`);
		resetInputField();
	};

	return (
		<form
			className={classes.root}
			noValidate
			autoComplete="off"
			onSubmit={(e) => callSearchFunction()}
			style={{
				display: "flex",
				width: "90%",
				justifyContent: "space-around",
				alignItems: "center",
				height: "100%",
			}}
		>
			<input
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
				style={{
					background: "white",
					width: "90%",
					height: "20%",
					borderRadius: "10px",
					color: "black",
					padding: "10px",
				}}
			/>
			<button
				type="submit"
				style={{
					position: "absolute",
					background: "none",
					right: "14.6rem",
					margin: "0",
					padding: "4px 0 0 0",
					width: "0",
					color: "black",
				}}
			>
				<Icon icon={magnifyIcon} style={{ height: "1.5rem", width: "1.5rem" }} />
			</button>
		</form>
	);
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = {
	searchShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
