

import Image from "next/image"
import Link from "next/link"

import page404Img from "@/public/404.png"

export default function Page404() {
  return (
    <>
      <div className="page404 px-[8%] flex justify-center items-center text-center flex-col h-screen w-full">
         <Image 
           src={page404Img}
           alt="page404Img"
         />
         <div className="my-5">
            <h1 className="CalSans text-4xl md:text-7xl"><span className="text-(--prim)">Oops! </span> Page not found!</h1>
         </div>
         <p className="text-gray-400 w-full lg:w-[30%]">We searched everywhere but couldn't find what your'e looking for. Let's find a better place for you to go.</p>
         <Link href="/" className="mt-6">
            <button className="px-7 py-3 border border-gray-300 rounded-lg GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer">
                Back To Home
            </button>
         </Link>
      </div>
    </>
  )
}
