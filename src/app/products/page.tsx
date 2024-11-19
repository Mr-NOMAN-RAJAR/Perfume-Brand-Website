import Contact from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import Product from "@/components/Product/page";
import { useState } from "react";

export default function Products() {
  return (
    <>
      <Navbar />
      <Product />
      <Contact />
    </>
  );
}
