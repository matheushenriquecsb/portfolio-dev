"use client";

import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAws,
  FaDocker,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiAuth0,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiTypeorm,
  SiKubernetes,
  SiVtex,
  SiRabbitmq,
  SiTailwindcss,
} from "react-icons/si";

import { DiLaravel, DiMongodb, DiPostgresql, DiRedis } from "react-icons/di";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

const experiencies = {
  title: "Experiências",
  items: [
    {
      company: "Ápice Soluções",
      position: "Desenvolvedor FullStack",
      description: [
        {
          name: "Desenvolvi interfaces e otimizei a paginação de dados em um e-commerce",
        },
        {
          name: "Manutenção de APIs RESTful e construção de querys SQL em uma plataforma de gestão escolar",
        },
      ],
      duration: "2022 - 2024",
      stacks: [
        { name: "Node", icons: <FaNodeJs /> },
        { name: "NestJS", icons: <SiNestjs /> },
        { name: "PostgreSQL", icons: <DiPostgresql /> },
        { name: "React", icons: <FaReact /> },
        { name: "HTML", icons: <FaHtml5 /> },
        { name: "CSS", icons: <FaCss3 /> },
        { name: "Tailwind", icons: <SiTailwindcss /> },
      ],
    },
    {
      company: "Semantix AI",
      position: "Desenvolvedor Backend",
      description: [
        {
          name: "Gerenciamento do ingestionamento de dados do projeto Ilumina SP, realizando extrações via APIs de fornecedores",
        },
        {
          name: "Atuação na Plataforma LinkAPI, integrando e gerenciando APIs de múltiplos serviços",
        },
        {
          name: "Sustentação e suporte da plataforma, com média de 120+ tickets/mês, atendendo 100+ clientes ativos",
        },
        {
          name: "Integração com plataformas como VTEX, Shopify, Magento, Linx (Commerce/Microvix), SAP, Oracle Commerce Cloud, Protheus, Gupy, Unico e LG",
        },
      ],
      duration: "2024 - present",
      stacks: [
        { name: "Node", icons: <FaNodeJs /> },
        { name: "Mongo", icons: <SiMongodb /> },
        { name: "PostgreSQL", icons: <DiPostgresql /> },
        { name: "Docker", icons: <FaDocker /> },
        { name: "Vtex", icons: <SiVtex /> },
        { name: "Kubernetes", icons: <SiKubernetes /> },
        { name: "RabbitMQ", icons: <SiRabbitmq /> },
        { name: "Redis", icons: <DiRedis /> },
        {
          icons: <FaAws />,
          name: "AWS",
        },
      ],
    },
  ],
};

const education = {
  title: "Formações",
  items: [
    {
      instituion: "Unifacs",
      degree: "Graduado em Análise e Desenvolvimento de Sistemas",
      duration: "2021 - 2024",
    },
    {
      instituion: "freeCodeCamp",
      degree: "Javascript Algorithms and Data Structures",
      duration: "2023",
    },
    {
      instituion: "freeCodeCamp",
      degree: "FrontEnd Development",
      duration: "2022",
    },
    {
      instituion: "LinkedIn",
      degree: "Advanced NodeJs",
      duration: "2023",
    },
    {
      instituion: "Udemy",
      degree: "Desenvolvimento de Software - PHP | Laravel",
      duration: "2022",
    },
    {
      instituion: "SENAI",
      degree: "Técnico em Automação Industrial",
      duration: "2015-2017",
    },
  ],
};

const skills = {
  title: "Tech Skills",
  items: [
    {
      icons: <FaJs />,
      name: "Javascript",
    },
    {
      icons: <BiLogoTypescript />,
      name: "Typescript",
    },
    {
      icons: <SiNestjs />,
      name: "NestJs",
    },
    {
      icons: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icons: <FaReact />,
      name: "React",
    },
    {
      icons: <SiNextdotjs />,
      name: "Next",
    },
    {
      icons: <SiExpress />,
      name: "Express",
    },
    {
      icons: <FaPhp />,
      name: "PHP",
    },
    {
      icons: <DiLaravel />,
      name: "Laravel",
    },
    {
      icons: <FaDocker />,
      name: "Docker",
    },
    {
      icons: <FaAws />,
      name: "AWS",
    },
    {
      icons: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icons: <SiRabbitmq />,
      name: "RabbitMQ",
    },
    {
      icons: <DiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icons: <DiMongodb />,
      name: "MongoDB",
    },
    {
      icons: <DiRedis />,
      name: "Redis",
    },
    {
      icons: <SiPrisma />,
      name: "Prisma",
    },
    {
      icons: <SiTypeorm />,
      name: "TypeORM",
    },
    {
      icons: <SiAuth0 />,
      name: "Auth0",
    },
    {
      icons: <SiVtex />,
      name: "Vtex",
    },
  ],
};

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-15 xl:py-6">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col gap-[60px]">
          <TabsList className="flex w-full max-w-[380px] mx-auto xl:mx-0 gap-20">
            <TabsTrigger value="experience">Experiências</TabsTrigger>
            <TabsTrigger value="education">
              Formações e Certificações
            </TabsTrigger>
            <TabsTrigger value="skills">Tech Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiencies.title}</h3>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols- lg:grid-cols-2 gap-[30px]">
                    {experiencies.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] pt-6 pb-3 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <h5 className="text-[18px] max-w-[290px] min-h-[70px] text-center lg:text-left">
                            {item.position}
                          </h5>
                          {item.description.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center gap-3 mb-7"
                              >
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.name}</p>
                              </div>
                            );
                          })}

                          <div className="flex items-center gap-3 ">
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 xl:gap-[30px] mt-4">
                              {item.stacks.map((item, index) => {
                                return (
                                  <li key={index} className="hidden md:block">
                                    <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger className="w-full h-[30px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                          <div className=" text-3xl pb-8 group-hover:text-accent transition-all duration-300 xl:text-2xl">
                                            {item.icons}
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p className="capitalize">
                                            {item.name}
                                          </p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[190px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-[17px] leading-normal min-h-[55px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituion}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group  ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 justify-center items-center px-3">
                                {item.icons}
                              </div>
                              <p className="capitalize text-2xl justify-center items-center flex group-hover:text-accent transition-all duration-300 ">
                                {item.name}
                              </p>
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
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
