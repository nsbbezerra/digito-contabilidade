import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import HeaderApp from "../../components/Head";
import Menu from "../../components/Menu";

export default function Articles() {
  const Card = () => (
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
  );

  return (
    <Fragment>
      <HeaderApp title="Digitos Contabilidade | Artigos" />
      <Menu />
      <div className="w-full bg-gradient-to-tr from-sky-50 to-sky-300 py-12 text-center text-5xl font-bold text-sky-700">
        ARTIGOS
      </div>

      <section className="container mx-auto px-10 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Footer />
    </Fragment>
  );
}
