import Image from 'next/image'
import Header from '@/Components/layout/Header'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'

export default function Home() {
  return (
   <div>
     <Hero />
     {/* <ProductList /> */ }
     <ProductList />
     
   </div>
  )
}
