import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

export default function ShoeCarousel({ imageLinks }) {
	return (
		<Carousel>
			<Carousel.Item interval={1000}>
				<img src={imageLinks[0]} alt="shoe pic" />
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img src={imageLinks[1]} alt="shoe pic" />
			</Carousel.Item>
			<Carousel.Item>
				<img src={imageLinks[2]} alt="shoe pic" />
			</Carousel.Item>
			<Carousel.Item>
				<img src={imageLinks[3]} alt="shoe pic" />
			</Carousel.Item>
			<Carousel.Item>
				<img src={imageLinks[4]} alt="shoe pic" />
			</Carousel.Item>
		</Carousel>
	);
}
