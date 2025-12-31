"use client"
import Card from "@/components/Card"
const error = ({error}) => {
  return (
    <Card>{error.message}</Card>
  )
}

export default error