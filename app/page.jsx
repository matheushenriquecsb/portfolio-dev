import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Desenvolvedor FullStack</span>
            <h2 className="h1 mb-6 mt-6">
              Hello Im <br />{" "}
              <span className="text-accent">Matheus Henrique</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/80">
              +3 anos de experiência no desenvolvimento de aplicações web,
              atuando com as stack do Node e React. Trabalhei no desenvolvimento
              e manutenção de APIs RESTful eficientes e escaláveis, além de
              desenvolver interfaces interativas e de alto desempenho, focadas
              na experiência do usuário.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12  border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
