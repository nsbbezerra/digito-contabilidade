import type { NextPage } from "next";
import Image from "next/image";
import { Fragment, useEffect, useMemo, useState } from "react";
import HeaderApp from "../components/Head";
import Menu from "../components/Menu";
import * as statsAnimation from "../assets/stats.json";
import * as teamAnimation from "../assets/team.json";
import * as meetingAnimation from "../assets/meeting.json";
import * as whatsappAnimation from "../assets/whatsapp.json";
import * as callAnimation from "../assets/call.json";
import * as megaphoneAnimation from "../assets/megaphone.json";
import ReactLottie from "../components/Lottie";
import Link from "next/link";
import Footer from "../components/Footer";
import { configs } from "../configs";
import Panel from "../components/Panel";
import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const [dialog, setDialog] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDialog(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <HeaderApp title="Digitos Contabilidade" />
      <Menu />
      <Panel />
      <section
        className="container mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-16 items-center justify-items-center"
        id="quem-somos"
      >
        <div className="w-64 sm:w-72 md:w-3/4">
          <ReactLottie
            animation={statsAnimation}
            width="100%"
            height={"100%"}
          />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="font-bold text-4xl border-b-2 border-b-green-600 w-fit pb-2 mb-5">
            Quem somos?
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Somos uma empresa 100% digital, especializada em contabilidade.
          </p>
          <p className="text-lg text-gray-700 max-w-xl">
            Te ajudamos a entender os números e cuidamos de tudo para que dessa
            forma você foque somente nos negócios.
          </p>

          <Link href={`https://wa.me/${configs.whatsapp}`} passHref>
            <a
              target={"_blank"}
              href="#"
              className="bg-green-600 w-fit px-5 flex items-center rounded-md shadow-lg text-white text-lg h-12 mt-5 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Fale Conosco
            </a>
          </Link>
        </div>
      </section>

      <section className="w-full bg-blue-50 py-16">
        <div className="container mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center">
          <div className="w-full">
            <h2 className="font-bold text-4xl border-b-2 border-b-green-600 w-fit pb-2 mb-5">
              Nossa equipe
            </h2>
            <p className="text-xl mt-5 text-gray-700">
              Um time qualificado que vai te ajudar a tomar decisões mais
              assertivas, fazendo assim alavancar seu negócio.
            </p>
          </div>
          <div className="w-full">
            <ReactLottie
              animation={teamAnimation}
              width="100%"
              height={"100%"}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-10 lg:px-20" id="servicos">
        <h3 className="font-bold text-4xl border-b-2 border-b-green-600 w-fit pb-2 mb-5">
          Nossos serviços
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-fit">
              <Image
                src="/img/empresa.png"
                width={100}
                height={100}
                objectFit="cover"
                alt="Real Contabilidade"
              />
            </div>
            <span className="text-center">SOCIETÁRIO</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-fit">
              <Image
                src="/img/contabilidade.png"
                width={100}
                height={100}
                objectFit="cover"
                alt="Real Contabilidade"
              />
            </div>
            <span className="text-center">CONTABILIDADE</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-fit">
              <Image
                src="/img/recibo.png"
                width={100}
                height={100}
                objectFit="cover"
                alt="Real Contabilidade"
              />
            </div>
            <span className="text-center">FISCAL / TRIBUTÁRIO</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-fit">
              <Image
                src="/img/leao.png"
                width={100}
                height={100}
                objectFit="cover"
                alt="Real Contabilidade"
              />
            </div>
            <span className="text-center">IMPOSTO DE RENDA</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-fit">
              <Image
                src="/img/pessoal.png"
                width={100}
                height={100}
                objectFit="cover"
                alt="Real Contabilidade"
              />
            </div>
            <span className="text-center">PESSOAL</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-50 py-16">
        <div className="container mx-auto px-10 lg:px-20">
          <h4 className="font-bold text-4xl border-b-2 border-b-green-600 w-fit pb-2">
            Canais de atendimento
          </h4>
          <span className="block mb-10">
            Você escolhe como quer ser atendido
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-56 rounded-full shadow bg-white p-3">
                <ReactLottie
                  animation={meetingAnimation}
                  width="100%"
                  height={"100%"}
                />
              </div>
              <span className="text-xl mt-3 font-semibold">VÍDEO CHAMADA</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-56 rounded-full shadow bg-white p-3">
                <ReactLottie
                  animation={whatsappAnimation}
                  width="100%"
                  height={"100%"}
                />
              </div>
              <span className="text-xl mt-3 font-semibold">WHATSAPP</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="w-56 rounded-full shadow bg-white p-3">
                <ReactLottie
                  animation={callAnimation}
                  width="100%"
                  height={"100%"}
                />
              </div>
              <span className="text-xl mt-3 font-semibold">
                LIGAÇÃO TELEFÔNICA
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Dialog.Root open={dialog} onOpenChange={() => setDialog(!dialog)}>
        <Dialog.Trigger asChild />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed w-[80%] left-[10%] right-[10%] bg-white shadow-lg rounded-md top-[10vh] z-50 max-h-[80vh] lg:w-[60%] lg:left-[20%] lg:right-[20%] h-[80vh] overflow-hidden">
            <Dialog.Close
              asChild
              className="absolute bg-black bg-opacity-10 rounded-full h-10 w-10 p-3 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10 right-3 top-3"
            >
              <XMarkIcon />
            </Dialog.Close>
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="bg-gradient-to-tr from-sky-50 to-sky-300 w-full h-full flex flex-col justify-center items-center gap-4 p-2">
                <div className="w-40 md:w-3/4">
                  <ReactLottie
                    animation={megaphoneAnimation}
                    width="100%"
                    height={"100%"}
                  />
                </div>
                <span className="py-2 px-5 lg:py-3 bg-sky-700 rounded-full flex items-center justify-center border-4 border-white text-white font-bold md:text-2xl xl:text-4xl -mt-10 shadow-lg text-center">
                  50% de desconto
                </span>
              </div>

              <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-3 md:gap-5 lg:gap-10">
                <h4 className="font-extrabold text-2xl md:text-5xl border-b-2 border-b-green-600 w-fit pb-2">
                  ATENÇÃO
                </h4>
                <p className="text-center md:text-2xl">
                  Você ganhou 50% de desconto na abertura do seu CNPJ
                </p>
                <Link
                  href={`https://wa.me/${configs.whatsapp}?text=Olá quero abrir minha empresa com 50% de desconto`}
                  passHref
                >
                  <a
                    target={"_blank"}
                    href="#"
                    className="bg-green-600 w-fit px-5 flex items-center rounded-md shadow-lg text-white text-lg h-12 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Quero meu desconto
                  </a>
                </Link>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  );
};

export default Home;
