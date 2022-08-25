import Image from "next/image";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import HeaderApp from "../../components/Head";
import Menu from "../../components/Menu";

export default function Article() {
  return (
    <Fragment>
      <HeaderApp title="A IMPORTÂNCIA DE UM BOM PLANEJAMENTO" />
      <Menu />

      <section className="container mx-auto max-w-4xl py-10 px-5">
        <h1 className="text-3xl md:text-5xl font-bold">
          A IMPORTÂNCIA DE UM BOM PLANEJAMENTO
        </h1>
        <span className="text-gray-600 mt-2 mb-5 block">
          27/07/2011 às 10:47
        </span>
        <div className="w-full rounded-md overflow-hidden">
          <Image
            src="https://img.freepik.com/fotos-gratis/empresarios-que-trabalham-em-financas-e-contabilidade-analisar-financas_74952-1411.jpg?w=2000"
            width={1366}
            height={650}
            layout="responsive"
            objectFit="cover"
            alt="Real Contabilidade"
          />
        </div>
        <div className="flex items-center gap-3 mt-3 border-b pb-3 mb-3">
          <div className="rounded-full w-10 h-10 overflow-hidden">
            <Image
              src="https://img.freepik.com/free-photo/blithesome-student-green-t-shirt-posing-with-laptop-indoor-photo-amazed-male-freelancer-isolated_197531-20164.jpg?w=2000"
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
              alt="Real Contabilidade"
            />
          </div>
          <span>Nome do autor</span>
        </div>

        <div className="flex flex-col gap-2 text-lg">
          <p>
            Os passageiros dos pontos de ônibus das cidades de Pequim, Kunming,
            Shenzen, Xi’an e Zhengzhou estão se deparando com uma curiosa
            máquina: um medidor em que as pessoas podem dizer se estão felizes
            ou não com o pressionar de um botão.
          </p>
          <p>
            Criado como parte de uma campanha para descobrir o quão feliz o povo
            chinês está, o equipamento conta com uma tela LCD que mostra os
            resultados de cada local e um sistema de conexão com um microblog
            semelhante ao Twitter, chamado Sina Weibo, em que as pessoas podem
            se expressar tanto pelo próprio medidor quanto online.
          </p>
          <p>
            A empresa organizadora anunciou que a campanha vai continuar até o
            dia 2 de agosto, quando eles irão analisar os resultados.
          </p>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}
