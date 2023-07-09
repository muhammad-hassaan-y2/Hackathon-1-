import Link from "next/link";
import logo from "/public/logo.webp";
import Image from "next/image";

import { ShoppingCart, ShoppingBag } from "lucide-react";


const Header = () => {
  return (
    <div className="flex justify-between items-center py-8 px-36 ">
      <Image src={logo} alt="logo" className="w-40" />

      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"/category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"/category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/products"}>All Products</Link>
        </li>
      </ul>
     
     <div>
      <input />
     </div>
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
          
     
     <div className="h-6 w-6"><ShoppingCart  /></div>

        
      </div>
      <input />
    </div>
  );
};

export default Header;
