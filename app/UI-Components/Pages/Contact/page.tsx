"use client";

import Image from "next/image";
import Link from "next/link";

import contactimg from "@/public/contact-image.jpg";

export default function Contact() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-[60px]">Contact Us</h1>

        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-[var(--prim)] transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Contact Us</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span
              className="rounded-full title-span border 
             border-gray-400 px-6 py-2 GolosText uppercase font-bold"
            >
              get in touch
            </span>
          </div>
          <div className="w-full lg:w-2/3 ml-5">
            <h1 className="CalSans text-4xl md:text-7xl">
              Have a Project in{" "}
              <span className="text-(--prim)">
                Mind? Let’s Make{" "}
              </span>{" "}
              It Happen
            </h1>
            <p className="text-gray-400 GolosText">
              We specialize in transforming visions into reality. Explore our
              portfolio of innovative architectural and interior design projects
              crafted with precision.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-20">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h2 className="text-gray-400 CalSans tracking-wider">Address:</h2>
                <p className="GolosText text-xl mt-5">5609 E Sprague Ave, Spokane Valley, WA 99212, USA</p>
              </div>
              <div>
                <h2 className="text-gray-400 CalSans tracking-wider mb-5">Support</h2>
                <span className="text-(--prim) font-bold">+(91) 123 456 7980</span>
                <p className="GolosText text-2xl font-bold">support@example.com</p>
              </div>
           </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center flex-col lg:flex-row gap-15">
             <div className="w-full lg:w-1/2">
              <Image 
                src={contactimg}
                alt="contactImg"
                className="w-full h-full rounded-2xl object-cover"
              />
             </div>
             <div className="w-full lg:w-1/2 ">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Full Name*</label>
                  <input type="text" placeholder="Full Name*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3
                  py-3 outline-none focus:border-(--prim) transition-all duration-300"/>
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Phone*</label>
                  <input type="text" placeholder="Phone*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 
                  outline-none focus:border-(--prim) transition-all duration-300"/>
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Email Address*</label>
                  <input type="email" placeholder="Email Address*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 
                  outline-none focus:border-(--prim) transition-all duration-300"/>
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Subject*</label>
                  <input type="email" placeholder="I want to*" className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 
                  outline-none focus:border-(--prim) transition-all duration-300"/>
                </div>
                <div className="flex flex-col GolosText mt-5">
                  <label className="font-semibold mb-2">Your Message*</label>
                  <textarea
                    placeholder="Your Message*"
                    rows={5}
                    className="w-[650px] bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-[var(--prim)] transition-all duration-300"
                  />
                  <button
                    className="mt-4 w-[160px] px-5 py-3 bg-white border border-gray-300 rounded-lg font-semibold hover:bg-[var(--prim)] hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="contact-map h-[600px]">
        <iframe className="w-full rounded-2xl brightness-100 grayscale" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086418919987!2d-122.4194154846814!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f83e8b23%3A0x5a5c2b1aef4d5b85!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"

            width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
