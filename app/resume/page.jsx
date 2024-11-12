"use client";

import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAws,
  FaDocker,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiAuth0,
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiTypeorm,
  SiVtex,
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

const about = {
  title: "Descrição",
  data: [
    {
      fieldName: "Name",
      fieldValue: "Matheus Henrique",
    },
    {
      fieldName: "Telefone",
      fieldValue: "71991910098",
    },
    {
      fieldName: "Experiência",
      fieldValue: "+3 anos",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "matheus.mhg2@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Português, English",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
  ],
};

const experiencies = {
  title: "Experiências Profissionais",
  items: [
    {
      company: "Ápice Soluções",
      position: "Desenvolvedor FullStack",
      duration: "2022 - 2024",
      stacks: [
        { name: "Node", icons: <FaNodeJs /> },
        { name: "NestJS", icons: <SiNestjs /> },
        { name: "PostgreSQL", icons: <DiPostgresql /> },
        { name: "React", icons: <FaReact /> },
      ],
    },
    {
      company: "Semantix",
      position: "Desenvolvedor Backend",
      duration: "2024 - present",
      stacks: [
        { name: "Node", icons: <FaNodeJs /> },
        { name: "Javascript", icons: <FaJs /> },
        { name: "Mongo", icons: <SiMongodb /> },
        { name: "Docker", icons: <FaDocker /> },
        { name: "Vtex", icons: <SiVtex /> },
      ],
    },
  ],
};

const education = {
  title: "Formações e cursos",
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
      icons: <FaPhp />,
      name: "PHP",
    },
    {
      icons: <DiLaravel />,
      name: "Laravel",
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
      icons: <SiNestjs />,
      name: "NestJs",
    },
    {
      icons: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icons: <SiExpress />,
      name: "Express",
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
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação Acadêmica</TabsTrigger>
            <TabsTrigger value="skills">Tech Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiencies.title}</h3>
                <ScrollArea className="h-[400px] w-[750px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiencies.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] pt-6 pb-3 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <h3 className="text-xl max-w-[280px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3 ">
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                              {item.stacks.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger className="w-full h-[30px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                          <div className=" text-3xl pb-8 group-hover:text-accent transition-all duration-300">
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
                          className="bg-[#232329] h-[194px] w-[350px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-[17px] max-w-[260px] leading-normal min-h-[55px] text-center lg:text-left">
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
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
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
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.data.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <span className="text-white/60 text-[20px]">
                          {item.fieldName}
                        </span>
                        <span className="text-[15px]">{item.fieldValue}</span>
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
