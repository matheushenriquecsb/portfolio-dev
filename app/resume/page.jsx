"use client";

import { FaNodeJs, FaReact, FaJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiRedis } from "react-icons/di";

import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About",
  description: "Teste teste teste teste",
  infor: [
    {
      fieldName: "Name",
      fieldValue: "Matheus Henrique",
    },
    {
      fieldName: "Phone",
      fieldValue: "71991910098",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "+3 anos",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazillian",
    },
    {
      fieldName: "email",
      fieldValue: "matheus.mhg2@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portugues, English",
    },
  ],
};

const experiencies = {
  title: "Experience",
  description:
    "orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
  items: [
    {
      company: "Apice Tecnologia",
      position: "Full Stack Developer",
      duration: "2022 - 2024",
    },
    {
      company: "Semantix",
      position: "Full Stack Developer",
      duration: "2024 - actual",
    },
  ],
};

const education = {
  title: "Education",
  items: [
    {
      instituion: "Unifacs",
      degree: "Graduado em Análise de Sistemas (ADS)",
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
      duration: "2023",
    },
    {
      instituion: "LinkedIn",
      degree: "Advanced NodeJs",
      duration: "2023",
    },
    {
      instituion: "Udemy",
      degree: "Desenvolvimento de Software",
      duration: "2023",
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
  description: "Tecnologias ao qual tive contato ao longo dos anos",
  items: [
    {
      icons: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icons: <FaJs />,
      name: "Javascript",
    },
    {
      icons: <BiLogoTypescript />,
      name: "Typescript",
    },
    {
      icons: <SiExpress />,
      name: "Express",
    },
    {
      icons: <SiNestjs />,
      name: "NestJs",
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
      icons: <DiMongodb />,
      name: "MongoDB",
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
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiencies.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiencies.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiencies.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
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
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infor.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xs">{item.fieldValue}</span>
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
