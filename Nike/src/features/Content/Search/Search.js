import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { searchShoes } from "../../../actions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./Search.css";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			background: "white",
			width: "70%",
			height: "40%",
		},
	},
}));

function Search(props) {
	const [searchValue, setSearchValue] = useState("");
	const classes = useStyles();

	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value);
	};

	const resetInputField = () => {
		setSearchValue("");
	};

	const callSearchFunction = (e) => {
		e.preventDefault();
		props.searchShoes(searchValue);
		resetInputField();
	};

	return (
		<form
			className={classes.root}
			noValidate
			autoComplete="off"
			onSubmit={callSearchFunction}
			style={{ display: "flex", width: "90%", justifyContent: "space-around", alignItems: "center" }}
		>
			<TextField
				id="outlined-basic"
				// label="Search"
				variant="filled"
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
				style={{ background: "white" }}
			/>
			<button type="submit" style={{ height: "50%", width: "20%", background: "white", color: "black" }}>
				Search
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
