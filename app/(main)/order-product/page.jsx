"use client"
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const handleOrder = () => {
        alert("Order Placed!");
        router.push('/');
    }
  return (
    <div>
        <h1>Order Product</h1>
        <button className="cursor-pointer" onClick={handleOrder}>Place Order</button>
    </div>
  )
}

export default page