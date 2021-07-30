import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Skeleton.css";

export default function HomeSkeletonCards() {
	return (
		<React.Fragment>
			<div className="skeleton-wrap-home">
				{Array(1)
					.fill()
					.map((item, i) => (
						<div className="shoe-details-container-skeleton" style={{ marginTop: "200px", width: "100%" }}>
							<div className="shoe-details-content-skeleton">
								<div className="shoe-img-skeleton">
									<Skeleton width={`100%`} height={`100%`} />
								</div>
								<div className="shoe-details-skeleton">
									<Skeleton width={`444px`} height={`40px`} style={{ margin: "0 0 20px 120px" }} />
									<div className="shoe-img-mobile"></div>
									<div className="details-prices-tabs-skeleton">
										<div className="tabs-skeleton">
											<button className="details-tab-skeleton">
												<Skeleton width={`100%`} height={`100%`} />
											</button>
											<button className="prices-tab-skeleton">
												<Skeleton width={`100%`} height={`100%`} />
											</button>
										</div>

										<div className="details-box-skeleton">
											<Skeleton width={`100%`} height={`100%`} />
										</div>
									</div>
									<span>
										<Skeleton width={`290px`} style={{ margin: "40px 0 40px 120px" }} />
									</span>
									<div
										className="add-btn-skeleton"
										style={{
											width: "65%",
											margin: "10px 0 0 120px",
											height: "50px",
										}}
									>
										<Skeleton height={`100%`} />
									</div>
								</div>
							</div>
							{/* <SimilarShoes /> */}
						</div>
					))}
			</div>
		</React.Fragment>
	);
}
