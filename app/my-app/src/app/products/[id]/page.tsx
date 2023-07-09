import { Products } from "@/utils/mock";
import ProductCard from "@/Components/ProductCard";
import P1 from "/public/P1.webp";
import Image, { StaticImageData } from "next/image";
import { Quantity } from "@/Components/Quantity/Quantity";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};


const sizes = ["xs", "sm", "md", "lg", "xl"]
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
   console.log(result)
   return (
    <div className="flex mt-16 py-10 flex-wrap">
     { result.map((product)=> (
        <div key={product.id} className="flex justify-between gap-6">
          <div>
            <Image src={product.image} alt={product.name} />
          </div>

          <div>
            <h1 className="text-2x">{product.name}</h1>
            <h2 className="text-base text-gray-400 font-semibold
            ">{product.tagline}</h2>
            <p>Name {product.name}</p>
            <p>Price {product.price}</p>
            <p>Category {product.category}</p>
            <div>
                <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
                {/* Sizes */}
                 <div className="flex gap-x-3">
                {
                  sizes.map((item) => {                
                    return( 
                    <div className="center w-6 h-6 mt-2 
                   border duration-300 rounded-full hover:shadow-xl">
                      <span className="text-[10px] font-semibold text-center text-gray-600
                    "> {item} 
                    </span>
                    </div> )    
                  })
                }
                </div>


                {/* Quantity */}

                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-[10px] font-semibold ">Quantity:</h3>
                   <Quantity />
                </div>

             {/* <div className="w-6 h-6 border duration-300 rounded-full 
              hover:shadow-2xl flex justify-center item-center
              ">
                <span className="text-[10px] font-semibold text-center text-gray-600
                "> {item} </span>

     </div> */}
            </div>
          
          
          </div>
        </div>

      ))}
    </div>
  );
}
