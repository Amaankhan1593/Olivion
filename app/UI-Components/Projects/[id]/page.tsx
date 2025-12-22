'use client'

import Link from "next/link";
import ProjectsData from "@/app/JsonData/Projects.json"
import Image from "next/image";
import CountUp from "react-countup";
import { useParams } from "next/navigation";


const DetailsData = [
  {
    id: 1,
    title: "Open Living Spaces:",
    pere: "Creating open-plan living areas to enhance the flow and connection between indoor and outdoor spaces."
  },
  {
  id: 2,
  title: "Outdoor Living:",
  pere: "Designing extensive outdoor areas, including a deck, pool, and garden, for relaxation and entertaining."
},
{
  id: 3,
  title: "Natural Materials:",
  pere: "Using reclaimed wood, stone, and natural fibers to evoke a sense of harmony with the surrounding environment."
},
{
  id: 4,
  title: "Modern Amenities:",
  pere: "Incorporating state-of-the-art kitchen appliances, smart home technology, and luxurious bathroom fixtures."
},
{
  id: 5,
  title: "Large Windows:",
  pere: "Installing floor-to-ceiling windows to maximize natural light and provide unobstructed ocean views."
}
]

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Gallery1 from "@/public/gallery-1.jpg"
import Gallery2 from "@/public/gallery-2.jpg"
import Gallery3 from "@/public/gallery-3.jpg"
import Gallery4 from "@/public/gallery-4.jpg"
import Gallery5 from "@/public/gallery-5.jpg"
import Gallery6 from "@/public/gallery-6.jpg"

const Gallerys = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];


export default function ProjectsDetails() {

    const { id } = useParams();

    const project = ProjectsData.find((p) => p.id === Number(id));

    if(!project) {
        return (
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-5xl md:text-6xl GolosText mt-15">Projects Not Found!</h1>
                <div className="flex items-center gap-5 mt-3">
                    <Link href="/UI-Components/Projects" className="hover:text-(--prim) text-xl transition-all duration-300 mt-5 border border-gray-300
                    px-4 py-2 rounded hover:bg-white">Back To Projects</Link>
                </div>
            </div>
        )
    }

  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-6xl md:text-8xl GolosText mt-15">Projects Details</h1>
        <div className="flex items-center text-xl mt-3">
          <Link href="/" className="hover:text-(--prim) transition-all duration-300)"> Home</Link>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <Link href="/UI-Components/Projects" className="hover:text-(--prim) transition-all duration-300)"> Projects</Link>
          <h2 className="GolosText"></h2>
          <i className="ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText text-white">{project.title}</h2>
        </div>
      </div>

      {/* Projects Details */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <h2 className="CalSans text-5xl md:text-7xl">{project.title}</h2>
        <div className="mt-10 border-b border-gray-300 pb-5 grid grid-cols-2 md:grid-cols-3
        lg:grid-cols-6 gap-5">
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Architect:</h2>
            <h3 className="GolosText text-xl">Themelexus</h3>
          </div>
          {/*  */}
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Project Type:</h2>
            <h3 className="GolosText text-xl flex flex-wrap">
              {project.tags.map((tag, idx) =>(
                <div key={idx}  className="flex">
                   {tag}
                </div>
              ))}
            </h3>
          </div>
          {/*  */}
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Client:</h2>
            <h3 className="GolosText text-xl">David Oswald</h3>
          </div>
          {/*  */}
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Terms:</h2>
            <h3 className="GolosText text-xl">6 Month</h3>
          </div>
          {/*  */}
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Strategy:</h2>
            <h3 className="GolosText text-xl">Minimalistic</h3>
          </div>
          {/*  */}
          <div className="flex flex-col items-start">
            <h2 className="CalSans text-gray-400 tracking-wider">Date:</h2>
            <h3 className="GolosText text-xl">{project.date}</h3>
          </div>
        </div>
        {/*  */}
        <div className="project-det-img mt-10 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden">
          <Image 
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Project Info */}
        <div className="mt-10">
          <h2 className="CalSans text-5xl md:text-7xl">Design in Details</h2>
          <p className="text-gray-500 GolosText mt-5">Considering the physical, mental, and emotional needs of people, interior designers use human-centered approaches to address how we live today. Creating novel approaches to promoting health, safety, and welfare, contemporary interiors are increasingly inspired by biophilia as a holistic approach to promoting health, safety, and welfare, contemporary interiors are increasingly inspired by biophilia as a holistic approach to design. By definition, interior design encompasses diverse aspects of our environment. The discipline extends to building materials and finishes; casework, furniture.</p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5">
            {DetailsData.map((info, index) => (
              <div key={index} className="flex gap-2">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>
                <p className="GolosText text-gray-500"><span className="font-bold
                text-black">{info.title}</span>{info.pere}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border border-gray-200 rounded-md grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4">
          <div className="p-10 border border-gray-200 flex flex-col justify-center 
          items-center">
            <h2 className="text-5xl tracking-wider GolosText font-bold">
               (
                <CountUp 
                   start={0}     
                   end={30}
                   duration={8}
                   enableScrollSpy
                />
                M2)
            </h2>
            <div className="GolosText text-xl mt-2">bedroom</div>
          </div>
          {/*  */}
          <div className="p-10 border border-gray-200 flex flex-col justify-center 
          items-center">
            <h2 className="text-5xl tracking-wider GolosText font-bold">
               (
                <CountUp 
                   start={0}     
                   end={22}
                   duration={8}
                   enableScrollSpy
                />
                M2)
            </h2>
            <div className="GolosText text-xl mt-2">bathroom</div>
          </div>
          {/*  */}
          <div className="p-10 border border-gray-200 flex flex-col justify-center 
          items-center">
            <h2 className="text-5xl tracking-wider GolosText font-bold">
               (
                <CountUp 
                   start={0}     
                   end={29}
                   duration={8}
                   enableScrollSpy
                />
                M2)
            </h2>
            <div className="GolosText text-xl mt-2">workspace</div>
          </div>
          {/*  */}
          <div className="p-10 border border-gray-200 flex flex-col justify-center 
          items-center">
            <h2 className="text-5xl tracking-wider GolosText font-bold">
               (
                <CountUp 
                   start={0}     
                   end={12}
                   duration={8}
                   enableScrollSpy
                />
                M2)
            </h2>
            <div className="GolosText text-xl mt-2">Kitchen area</div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="CalSans text-5xl md:text-7xl">Incredible Result</h2>
          <p className="text-gray-500 GolosText mt-5">Establishing multi-sensory experiences, we can design interiors that resonate across ages and demographics. These rooms and spaces connects us to nature as a proven way to inspire us, boost our productivity, and create greater well-being. Beyond these benefits, by reducing stress and enhancing creativity, we can also expedite healing. In our increasingly urbanized cities, biophilia advocates a more humanistic approach to design. The result is biophilic interiors that celebrate how we live, work and learn with nature. The term translates to ‘the love of living things’ in ancient Greek (philia = the love of / inclination towards), and was used by German-born American psychoanalyst Erich Fromm in The Anatomy of Human Destru ctiveness (1973).</p>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="project-gallery">
        <Swiper
         slidesPerView={2}
         spaceBetween={0}
         loop={true}
         autoplay={{
          delay: 1500,
         }}
         modules={[Autoplay]}
         speed={1800}
         breakpoints={{
          1200: {slidesPerView: 2},
          575: { slidesPerView: 1},
          0: { slidesPerView: 1},
         }}
        >
          {Gallerys.map((img, idx) => (
            <SwiperSlide key={idx}>
                  <Image 
                    src={img}
                    alt={`Galleryss-Img-${idx}`}
                    className="w-full h-[600px] object-cover"
                   />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Related Projects */}
       <div className="px-[8%] lg:px-[12%] py-20 about">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText
            uppercase font-bold">Related Projects</span>
          </div>
          <div className="w-full lg-w-2/3">
            <h1 className="ml-10 CalSans text-4xl md:text-7xl w-full lg:w-[60%]">Explore <span 
            className="text-(--prim)">Our Project</span> Showcase</h1>
          </div>
        </div>
        <Swiper
         slidesPerView={3}
         spaceBetween={30}
         loop={true}
         autoplay={{
          delay: 1500,
         }} 
          modules={[Autoplay]}
          speed={1800}
          breakpoints={{
            1200: {slidesPerView: 3},
            991: { slidesPerView: 2},
            575: { slidesPerView: 1},
            0: {slidesPerView: 1},
          }}
          className="mt-30"
        >
          {
            ProjectsData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-card group">
                   <Link href={`/UI-Components/Projects/${project.id}`}>
                     <div className="project-image relative w-full h-[500px]
                     overflow-hidden rounded-2xl cursor-pointer">
                       <div
                      className="project-img w-full h-full bg-cover group-hover:scale-110 transition-all duration-300 bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute top-5 left-5 flex gap-2 z-50">
                      {project.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="bg-white/20 backdrop-blur-sm text-white
                                    border border-gray-300 px-4 py-1 rounded-full
                                    hover:bg-[var(--prim)] hover:border-transparent
                                    transition-all duration-300"
                                                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="project-info my-5">
                    <Link href={`UI-Components/Projects/${project.id}`}>
                     <h2 className="GolosText font-semibold text-4xl hover:text-(--prim)
                     transition-all duration-300">{project.title}</h2>
                     </Link>
                     <h5 className="GolosText text-2xl mt-2">{project.location}</h5>
                     <p className="GolosText text-md text-gray-700">{project.date}</p>
                </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
       </div>
    </>
  );
}




































// "use client";
// import Link from "next/link";
// import ProjectsData from "@/app/JsonData/Projects.json";
// import Image from "next/image";
// import CountUp from "react-countup";
// import { useParams } from "next/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// import Gallery1 from "@/public/gallery-1.jpg";
// import Gallery2 from "@/public/gallery-2.jpg";
// import Gallery3 from "@/public/gallery-3.jpg";
// import Gallery4 from "@/public/gallery-4.jpg";
// import Gallery5 from "@/public/gallery-5.jpg";
// import Gallery6 from "@/public/gallery-6.jpg";

// interface Project {
//   id: number;
//   title: string;
//   location: string;
//   date: string;
//   image: string;
//   tags: string[];
// }

// interface Detail {
//   id: number;
//   title: string;
//   pere: string;
// }

// const DetailsData: Detail[] = [
//   { id: 1, title: "Open Living Spaces:", pere: "Creating open-plan living areas to enhance the flow and connection between indoor and outdoor spaces." },
//   { id: 2, title: "Outdoor Living:", pere: "Designing extensive outdoor areas, including a deck, pool, and garden, for relaxation and entertaining." },
//   { id: 3, title: "Natural Materials:", pere: "Using reclaimed wood, stone, and natural fibers to evoke a sense of harmony with the surrounding environment." },
//   { id: 4, title: "Modern Amenities:", pere: "Incorporating state-of-the-art kitchen appliances, smart home technology, and luxurious bathroom fixtures." },
//   { id: 5, title: "Large Windows:", pere: "Installing floor-to-ceiling windows to maximize natural light and provide unobstructed ocean views." }
// ];

// const Gallerys = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];

// export default function ProjectsDetails() {
//   const { id } = useParams();
//   const project = (ProjectsData as Project[]).find((p) => p.id === Number(id));

//   if (!project) {
//     return (
//       <div className="section-bg text-white flex flex-col items-center justify-center h-screen">
//         <h1 className="text-5xl md:text-6xl GolosText mt-15">Project Not Found!</h1>
//         <Link
//           href="/UI-Components/Projects"
//           className="hover:text-[var(--prim)] text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2 rounded hover:bg-white"
//         >
//           Back To Projects
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Header */}
//       <div className="section-bg text-white flex flex-col">
//         <h1 className="text-6xl md:text-8xl GolosText mt-15">Projects Details</h1>
//         <div className="flex items-center text-xl mt-3 gap-2">
//           <Link href="/" className="hover:text-[var(--prim)] transition-all duration-300">Home</Link>
//           <i className="ri-arrow-right-wide-fill mt-1"></i>
//           <Link href="/UI-Components/Projects" className="hover:text-[var(--prim)] transition-all duration-300">Projects</Link>
//           <i className="ri-arrow-right-wide-fill mt-1"></i>
//           <h2 className="GolosText text-white">{project.title}</h2>
//         </div>
//       </div>

//       {/* Project Info */}
//       <div className="px-[8%] lg:px-[12%] py-20">
//         <h2 className="CalSans text-5xl md:text-7xl">{project.title}</h2>

//         {/* Project Details */}
//         <div className="mt-10 border-b border-gray-300 pb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
//           <div className="flex flex-col items-start">
//             <h2 className="CalSans text-gray-400 tracking-wider">Architect:</h2>
//             <h3 className="GolosText text-xl">Themelexus</h3>
//           </div>
//           <div className="flex flex-col items-start">
//             <h2 className="CalSans text-gray-400 tracking-wider">Project Type:</h2>
//             <h3 className="GolosText text-xl flex flex-wrap gap-2">
//               {project.tags.map((tag, idx) => (
//                 <span key={idx}>{tag}</span>
//               ))}
//             </h3>
//           </div>
//           <div className="flex flex-col items-start">
//             <h2 className="CalSans text-gray-400 tracking-wider">Client:</h2>
//             <h3 className="GolosText text-xl">David Oswald</h3>
//           </div>
//           <div className="flex flex-col items-start">
//             <h2 className="CalSans text-gray-400 tracking-wider">Terms:</h2>
//             <h3 className="GolosText text-xl">6 Month</h3>
//           </div>
//           <div className="flex flex-col items-start">
//             <h2 className="CalSans text-gray-400 tracking-wider">Strategy:</h2>
//             <h3 className="GolosText text-xl">Minimalistic</h3>
//           </div>
//           <div className="flex flex-col items-start">
//             <h2 className="CalSans text-gray-400 tracking-wider">Date:</h2>
//             <h3 className="GolosText text-xl">{project.date}</h3>
//           </div>
//         </div>

//         {/* Project Main Image */}
//         <div className="project-det-img mt-10 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden">
//           <Image 
//             src={project.image}
//             alt={project.title}
//             width={800}
//             height={400}
//             className="w-full h-full object-cover" 
//           />
//         </div>

//         {/* Design Details */}
//         <div className="mt-10">
//           <h2 className="CalSans text-5xl md:text-7xl">Design in Details</h2>
//           <p className="text-gray-500 GolosText mt-5">
//             Considering the physical, mental, and emotional needs of people, interior designers use human-centered approaches...
//           </p>
//           <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5">
//             {DetailsData.map((info) => (
//               <div key={info.id} className="flex gap-2">
//                 <i className="bi bi-check-circle-fill text-[var(--prim)]"></i>
//                 <p className="GolosText text-gray-500">
//                   <span className="font-bold text-black">{info.title}</span>{info.pere}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="mt-10 border border-gray-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {[
//             { label: "Bedroom", end: 30 },
//             { label: "Bathroom", end: 22 },
//             { label: "Workspace", end: 29 },
//             { label: "Kitchen Area", end: 12 }
//           ].map((item, idx) => (
//             <div key={idx} className="p-10 border border-gray-200 flex flex-col justify-center items-center">
//               <h2 className="text-5xl tracking-wider GolosText font-bold">
//                 (<CountUp start={0} end={item.end} duration={8} enableScrollSpy /> M2)
//               </h2>
//               <div className="GolosText text-xl mt-2">{item.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
