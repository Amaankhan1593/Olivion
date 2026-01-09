"use client"

import Link from 'next/link';
import TeamsData from "@/app/JsonData/Teams.json"
import Image from 'next/image';

import quote from "@/public/quote.png"
import team1 from "@/public/team-1.jpg"
import team4 from "@/public/team-4.jpg"
import team3 from "@/public/team-3.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonial = [
  {
    id: 1,
    image: team1,
    name: "Olivia Peterson",
    role: "Co-Founder",
    message: "“As a Co-founder, Olivia Peterson values simplicity and elegance — and this design team delivered both perfectly. Her new modern living room feels open, calm, and sophisticated. The neutral tones and minimalist design create a beautiful harmony that makes every guest admire her home’s atmosphere.”"
  },
  {
    id: 2,
    image: team4,
    name: "Helen Reeves",
    role: "Material Consultant",
    message: "“Being a Material Consultant, Helen Reeves appreciates attention to detail, and this team exceeded her expectations. From stunning textures to soft lighting, every corner of her workspace feels intentional and inspiring. Helen loves how her space now reflects both professionalism and comfort.”"
  },
  {
    id: 3,
    image: team3,
    name: "Valeria Novikova",
    role: "Lighting Specialist",
    message: "“As a Lighting Specialist, Valeria Novikova was amazed by how the team transformed her vision into reality. The lighting design feels soft yet elegant, enhancing her home’s modern beauty. Valeria describes the result as warm, luxurious, and perfectly balanced.”"
  }
]

export default function Teams() {
  return (
    <>
     <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-[60px]">Our Team</h1>

        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-[var(--prim)] transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Team</h2>
        </div>
      </div>

      {/* Teams */}
      <div className="px-[8%] lg:px-[12%] py-20 pb-0 about">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className='rounded-full title-span border
            border-gray-400 px-6 py-2 GolosText uppercase font-bold'>Our 
            Best team</span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl w-full lg:w-[80%]
            ">Meet The <span className='text-(--prim)'>Experts Our
            Interior</span> Designers</h1>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-8 team-wrapper">
          {TeamsData.map((team, index) => (
            <div key={index} className="team-card cursor-pointer
            rounded-2xl overflow-hidden">
              <Image
               src={team.image}
               alt={team.name}
               width={400}
               height={400}
               className='w-full h-full rounded-2xl'
              />
              <div className="team-content text-white">
                <h2 className="CalSans text-4xl">{team.name}</h2>
                <h2 className="GolosText">{team.role}</h2>
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-10 h-10 flex items-center
                    justify-center border border-gray-300 rounded-full
                    hover:bg-white hover:text-black 
                    hover:border-transparent cursor-pointer
                    transition-all duration-300">
                       <i className='ri-facebook-fill'></i>
                    </div>
                    <div className="w-10 h-10 flex items-center
                    justify-center border border-gray-300 rounded-full
                    hover:bg-white hover:text-black 
                    hover:border-transparent cursor-pointer
                    transition-all duration-300">
                       <i className='ri-twitter-x-fill'></i>
                    </div>
                    <div className="w-10 h-10 flex items-center
                    justify-center border border-gray-300 rounded-full
                    hover:bg-white hover:text-black 
                    hover:border-transparent cursor-pointer
                    transition-all duration-300">
                       <i className='ri-instagram-line'></i>
                    </div>
                    <div className="w-10 h-10 flex items-center
                    justify-center border border-gray-300 rounded-full
                    hover:bg-white hover:text-black 
                    hover:border-transparent cursor-pointer
                    transition-all duration-300">
                       <i className='ri-linkedin-fill'></i>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teams */}
      <div className="mt-30 px-[8%] lg:px-[12%] teams-bg py-20 flex flex-col
      justify-center items-center">
        <Image src={quote} alt='quote' width={130} height={130}
        />
        <Swiper
         slidesPerView={1}
         spaceBetween={0}
         loop={true}
         autoplay={{delay: 1800}}
         modules={[Autoplay]}
         className='w-full justify-center items-center lg:w-[70%]'
        >
          {testimonial.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center items-center flex-col">
                <p className="GolosText text-2xl font-semibold
                text-center">
                  {item.message}
                </p>

                <div className="flex items-center gap-5 mt-5">
                   <Image 
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={100}
                    className='rounded-2xl'
                   />
                   <div className="">
                     <h2 className="GolosText font-bold text-2xl">{item.name}</h2>
                     <p className="GolosText  font-semibold">{item.role}</p>
                   </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
