import type { NextPage } from "next";
import Image from "next/image";
import { Fragment } from "react";
import HeaderApp from "../components/Head";
import Menu from "../components/Menu";
import * as statsAnimation from "../assets/stats.json";
import * as teamAnimation from "../assets/team.json";
import ReactLottie from "../components/Lottie";
import Link from "next/link";
import Footer from "../components/Footer";
import { configs } from "../configs";
import Panel from "../components/Panel";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
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

      <section className="w-full py-16" id="artigos">
        <div className="container mx-auto px-10 lg:px-20">
          <h4 className="font-bold text-4xl border-b-2 border-b-green-600 w-fit pb-2 mb-5">
            Artigos recentes
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/" passHref>
              <a className="hover:underline">
                <div className="bg-white rounded-md border overflow-hidden shadow-sm">
                  <div className="w-full h-fit">
                    <Image
                      src="https://img.freepik.com/fotos-gratis/empresarios-que-trabalham-em-financas-e-contabilidade-analisar-financas_74952-1411.jpg?w=2000"
                      width={1366}
                      height={850}
                      objectFit="cover"
                      alt="Real Contabilidade"
                    />
                  </div>

                  <div className="p-3">
                    <span className="font-bold text-lg">
                      A IMPORTÂNCIA DE UM BOM PLANEJAMENTO
                    </span>
                    <p className="text-gray-700 mt-2">20 de Setembro de 2022</p>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="hover:underline">
                <div className="bg-white rounded-md border overflow-hidden shadow-sm">
                  <div className="w-full h-fit">
                    <Image
                      src="https://img.freepik.com/fotos-gratis/empresarios-que-trabalham-em-financas-e-contabilidade-analisar-financas_74952-1411.jpg?w=2000"
                      width={1366}
                      height={850}
                      objectFit="cover"
                      alt="Real Contabilidade"
                    />
                  </div>

                  <div className="p-3">
                    <span className="font-bold text-lg">
                      A IMPORTÂNCIA DE UM BOM PLANEJAMENTO
                    </span>
                    <p className="text-gray-700 mt-2">20 de Setembro de 2022</p>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="hover:underline">
                <div className="bg-white rounded-md border overflow-hidden shadow-sm">
                  <div className="w-full h-fit">
                    <Image
                      src="https://img.freepik.com/fotos-gratis/empresarios-que-trabalham-em-financas-e-contabilidade-analisar-financas_74952-1411.jpg?w=2000"
                      width={1366}
                      height={850}
                      objectFit="cover"
                      alt="Real Contabilidade"
                    />
                  </div>

                  <div className="p-3">
                    <span className="font-bold text-lg">
                      A IMPORTÂNCIA DE UM BOM PLANEJAMENTO
                    </span>
                    <p className="text-gray-700 mt-2">20 de Setembro de 2022</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>

          <Link href="/artigos" passHref>
            <a className="mt-5 flex items-center gap-2 text-sky-700 hover:underline text-lg cursor-pointer font-semibold w-fit">
              <MagnifyingGlassIcon className="w-5 h-5" />
              Veja mais
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Home;
