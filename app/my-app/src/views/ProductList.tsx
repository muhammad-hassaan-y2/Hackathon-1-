import ProductCard from "@/Components/ProductCard";
import P1 from "/public/P1.webp"
import Image, { StaticImageData } from "next/image";
import { Products } from "@/utils/mock";


const ProductList = () => {
  
     const productChecks= Products.slice(0, 3)  
  return (
    <>
     <div className="flex justify-evenly mt-16 py-10">
      
      {
        productChecks.map((product) => (

          <ProductCard 
          key={product.id} 
          title={product.name} 
          price={product.price} 
          img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />

        ))
      }
      
      { /*<ProductCard title="But" price={934} img={P1}/>
       <ProductCard title="Buy" price={834} img={P1}/>
       <ProductCard title="Why" price={734} img={P1}/>
                */}
       </div>
     </>

  )
}

export default ProductList