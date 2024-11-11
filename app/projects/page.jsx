"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb, DiPostgresql, DiRedis } from "react-icons/di";
import { FaCcStripe, FaNodeJs } from "react-icons/fa";
import {
  SiFirebase,
  SiJest,
  SiNestjs,
  SiReact,
  SiTypeorm,
} from "react-icons/si";

const projects1 = {
  num: "01",
  category: "Tomato Restaurant",
  title: "Project FullStack",
  description:
    "Plataforma de e-commerce para um restaurante, permitindo que os usuários naveguem pelo cardápio, adicionem itens ao carrinho, se cadastrem, façam login e finalizem a compra com pagamento seguro via Stripe.",
  stack: [
    { name: "React", icons: <SiReact /> },
    { name: "Node", icons: <FaNodeJs /> },
    { name: "NestJS", icons: <SiNestjs /> },
    { name: "Typescript", icons: <BiLogoTypescript /> },
    { name: "TypeORM", icons: <SiTypeorm /> },
    { name: "PostgreSQL", icons: <DiPostgresql /> },
    { name: "Stripe", icons: <FaCcStripe /> },
    { name: "Jest", icons: <SiJest /> },
  ],
  image: "/assets/work/tomato.png",
  live: "https://delivery-food-order.netlify.app/",
  github: "https://github.com/matheushenriquecsb/food-delivery-react",
};

const projects2 = {
  num: "02",
  category: "Booking Website",
  title: "Project FullStack",
  description:
    "Aplicação para gerenciamento de reservas de hotéis, com autenticação segura via OAuth (GitHub e Google). Permite que usuários façam login facilmente e, após autenticados, explorem acomodações, escolham datas e selecionem o número de quartos, oferecendo uma experiência de reserva intuitiva e eficiente.",
  stack: [
    { name: "React", icons: <SiReact /> },
    { name: "Node", icons: <FaNodeJs /> },
    { name: "NestJS", icons: <SiNestjs /> },
    { name: "Typescript", icons: <BiLogoTypescript /> },
    { name: "Mongo", icons: <DiMongodb /> },
    { name: "Firebase", icons: <SiFirebase /> },
    { name: "Redis", icons: <DiRedis /> },
    { name: "Jest", icons: <SiJest /> },
  ],
  image: "/assets/work/booking-project.png",
  live: "https://booking-rent.netlify.app/",
  github: "https://github.com/matheushenriquecsb/booking-backend-nestjs",
};

const Work = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center pb-3 pt-10 xl:px-0">
      <div className="container mx-auto mb-25 mt-12">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] mb-24">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {projects1.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects1.category}
              </h2>
              <h4 className="text-[22px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects1.title}
              </h4>
              <p className="text-white/60">{projects1.description}</p>
              <ul className="flex gap-4">
                {projects1.stack.map((item, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[30px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className=" text-3xl group-hover:text-accent transition-all duration-300">
                              {item.icons}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={projects1.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projects1.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[500px] mb-12">
              <div className="w-full">
                <div className="h-[420px] w-[730px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={projects1.image}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-24">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]  mt-27 ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {projects2.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects2.category}
              </h2>
              <h4 className="text-[22px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects2.title}
              </h4>
              <p className="text-white/60">{projects2.description}</p>
              <ul className="flex gap-4">
                {projects2.stack.map((item, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[30px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className=" text-3xl group-hover:text-accent transition-all duration-300">
                              {item.icons}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={projects2.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projects2.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[600px] mb-12">
              <div className="w-full h-[120%]">
                <div className="h-[520px] w-[730px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-[110%] z-10"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={projects2.image}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
