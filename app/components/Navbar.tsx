import Link from "next/link";
import Image from "next/image";

import type { NextPage } from "next";

async function productsList() {
  let data:any = await fetch('https://dummyjson.com/products');
  data = await data.json();
  console.log('data products is:', data);
  return data.products;
}

const NavBar:NextPage = async () => {
  const prods = await productsList();
  return(
    <>
    
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='images/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
    </nav>
  </header>
  {
        prods.map((item:any) => (
          <div key={item.id}>
            <h3>Name: {item.title} </h3>
          </div>
        ))
      }
  </>
  )
};

export default NavBar;
