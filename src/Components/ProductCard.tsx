import React from 'react'
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image'


function ProductCard(props: {
  title: string;
   price: number;
  img: StaticImageData;
  category: string;
  id: number;
  }) { 
  return (
     <Link href={`/products/${props.id}`}>
   <div> 
        <div className='py-5'>
    <Image src={props.img} alt="product" />
       <h3 className="font-bold text-lg mt-3">{props.title}</h3>
       <p className="font-bold text-lg">${props.price}</p>
       <p className="font-bold text-lg">Category <span className='text-base font-normal 
         capitalize'>
        {props.category}
       </span> 
       </p>
    <button
          type="button"
          className="text-white 
 bg-zinc-900 py-2.5 px-2 mt-4 rounded-lg"
         >
          Add to cart
        </button>
   </div>

   </div>
   </Link>
  )
}

export default ProductCard