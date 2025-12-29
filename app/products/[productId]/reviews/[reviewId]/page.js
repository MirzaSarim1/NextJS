import React from "react";
import { notFound } from "next/navigation";

export default async function review({params}) {
    const {reviewId, productId} = await params;

    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <div> Review {reviewId} for Product {productId}</div>
    )
}