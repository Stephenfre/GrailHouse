import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Skeleton.css";

export default function SkeletonCards() {
	return (
		<div className="skeleton-wrap">
			{Array(8)
				.fill()
				.map((item, i) => (
					<div className="skeleton">
						<div className="skeleton-content">
							<div className="skeleton-img">
								<Skeleton width={`100%`} height={`100%`} />
							</div>
							<div className="skeleton-details-wrap">
								<div className="skeleton-details">
									<Skeleton width={`100%`} height={`69%`} style={{ marginTop: 10 }} />
									<div className="skeleton-prices">
										<Skeleton width={`40%`} />
										<Skeleton width={`25%`} height={30} />
									</div>
									<div className="skeleton-got-them-btn">
										<Skeleton width={`100%`} height={`100%`} />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}
