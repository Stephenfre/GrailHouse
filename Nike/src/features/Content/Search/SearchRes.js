import React, { useState } from "react";
import Search from "./Search";
import Shoes from "./Shoes";

export default function SearchRes() {
	const [isLoaded, setIsLoaded] = useState(true);
	const [shoeData, setShoeData] = useState([]);
	const [error, setError] = useState(null);

	const search = (searchValue) => {
		setIsLoaded(true);
		setError(null);

		fetch(`http://localhost:5000/search/${searchValue}`)
			.then((res) => res.json())
			.then((jsonResponse) => {
				console.log(jsonResponse);
				setShoeData(jsonResponse);
				setIsLoaded(false);
			});
	};

	return (
		<div className="App">
			<Search search={search} />
			<div className="shoeData">
				<div className="trending-shoes-container">
					{shoeData.map((shoes, index) => (
						<Shoes
							key={`${index}-${shoes.shoeName}`}
							thumbnail={shoes.thumbnail}
							shoeName={shoes.shoeName}
							retailPrice={shoes.retailPrice}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
