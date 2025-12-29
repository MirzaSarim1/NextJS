import React from "react";

export default async function review({params}) {
    const {reviewId, productId} = await params;
    return (
        <div> Review {reviewId} for Product {productId}</div>
    )
}