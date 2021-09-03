import React from "react";
import Skeleton from "react-loading-skeleton";
import "./HomeSkeletonCards.css";

export default function HomeSkeletonCards() {
    return (
        <React.Fragment>
            <div className="skeleton-wrap-home">
                {Array(8)
                    .fill()
                    .map((item, i) => (
                        <div className="skeleton-home">
                            <div className="skeleton-content-home">
                                <div className="skeleton-img-home">
                                    <Skeleton width={`100%`} height={`100%`} />
                                </div>
                                <div className="skeleton-details-wrap-home">
                                    <div className="skeleton-details-home">
                                        <Skeleton width={`100%`} height={`69%`} style={{ marginTop: 10 }} />
                                        <div className="skeleton-prices-home">
                                            <Skeleton width={`40%`} />
                                            <Skeleton width={`25%`} height={30} />
                                        </div>
                                        <div className="skeleton-got-them-btn-home">
                                            <Skeleton width={`100%`} height={`100%`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="skeleton-wrap-mobile-home">
                {Array(8)
                    .fill()
                    .map((item, i) => (
                        <div className="skeleton-home">
                            <div className="skeleton-content-home">
                                <div className="skeleton-img-home">
                                    <Skeleton width={`100%`} height={`100%`} />
                                </div>
                                <div className="skeleton-details-wrap-home">
                                    <div className="skeleton-details-home">
                                        <Skeleton width={`100%`} height={`69%`} style={{ marginTop: 10 }} />
                                        <div className="skeleton-prices-home">
                                            <Skeleton width={`40%`} />
                                            <Skeleton width={`25%`} height={30} />
                                        </div>
                                        <div className="skeleton-got-them-btn-home">
                                            <Skeleton width={`100%`} height={`100%`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </React.Fragment>
    );
}
