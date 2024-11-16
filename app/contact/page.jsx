"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaVoicemail,
} from "react-icons/fa";

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "71991910098",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "matheus.mhg2@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Localização",
    desc: "Salvador, Bahia",
  },
];

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const templateParams = {
      firstname,
      lastname,
      email,
      phone,
      message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      // Mostrar mensagem de erro
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      console.error("FAILED...", error);
    }
  };

  return (
    <div className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
              ref={formRef}
            >
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
              <p className="text-white/60">
                Preencha o formulário e mande uma mensagem
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="firstname" placeholder="Nome" />
                <Input
                  type="lastName"
                  name="lastname"
                  placeholder="Sobrenome"
                />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="phone" name="phone" placeholder="Telefone" />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Digite uma mensagem"
              />
              <div className="flex-1 items-center text-center px-15">
                {error && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert variant="filled" severity="error">
                      Error
                    </Alert>
                  </Stack>
                )}
                {success && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert
                      variant="filled"
                      severity="success"
                      className="bg-accent text-primary"
                    >
                      Sucesso
                    </Alert>
                  </Stack>
                )}
              </div>
              <Button size="md" type="submit" className="max-w-50">
                Enviar
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infos.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.desc}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
