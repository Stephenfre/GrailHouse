import React from "react";
import Skeleton from "react-loading-skeleton";
import "../TrendingShoesCard.css";

export default function SkeletonCards() {
	return (
		<div>
			{Array(9)
				.fill()
				.map((item, i) => (
					<div className="trending">
						<div className="trending-shoes">
							<div className="trending-shoes-img">
								<Skeleton />
							</div>
							<div className="trending-shoes-wrap">
								<div className="trending-shoes-details">
									<Skeleton />
									<div className="prices">
										<Skeleton />
										<Skeleton style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }} />
									</div>
									<div className="got-them"></div>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}
