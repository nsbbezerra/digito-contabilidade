import ReactLottie from "./Lottie";
import * as minusAnimation from "../assets/minus.json";
import * as plusAnimation from "../assets/plus.json";
import * as xAnimation from "../assets/x.json";
import { Fragment } from "react";
import Image from "next/image";

export default function Panel() {
  return (
    <Fragment>
      <header className="w-full bg-gradient-to-r from-blue-50 to-sky-200 py-16">
        <div className="container mx-auto px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="w-full relative">
            <div className="flex items-center gap-3 flex-col lg:justify-start lg:items-start xl:flex-row xl:items-center">
              <div className="w-[100px] h-[100px]">
                <Image
                  src="/img/digitos300.png"
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt="Real Contabilidade"
                  quality={100}
                  layout="fixed"
                />
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="block text-sky-700 text-2xl sm:text-3xl md:text-4xl">
                  DÍGITOS
                </span>
                <span className="block text-sky-700 text-3xl font-bold sm:text-4xl md:text-5xl">
                  CONTABILIDADE
                </span>
              </div>
            </div>

            <div className="w-[50px] h-[50px] absolute right-12 -top-3">
              <ReactLottie
                animation={plusAnimation}
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-[50px] h-[50px] absolute right-2 top-1/2">
              <ReactLottie
                animation={minusAnimation}
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-[50px] h-[50px] absolute right-12 -bottom-10">
              <ReactLottie animation={xAnimation} width="100%" height="100%" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-xl sm:text-3xl text-center xl:text-4xl">
              Multiplicando{" "}
              <span className="text-green-700 font-bold">resultados</span> e
              compartilhando{" "}
              <span className="text-green-700 font-bold">conhecimentos</span>
            </h1>

            <a
              href="#"
              className="bg-green-600 w-fit px-5 flex items-center rounded-md shadow-lg text-white text-lg h-12 mt-10 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Seja nosso cliente
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
