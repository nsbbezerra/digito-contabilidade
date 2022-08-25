import ReactLottie from "./Lottie";
import * as minusAnimation from "../assets/minus.json";
import * as plusAnimation from "../assets/plus.json";
import * as xAnimation from "../assets/x.json";
import { Fragment } from "react";
import Image from "next/image";

export default function Panel() {
  return (
    <Fragment>
      <header className="w-full bg-gradient-to-tr from-sky-50 to-sky-300 py-12">
        <div className="container mx-auto px-10 lg:px-20 grid grid-cols-1 gap-10 items-center justify-items-center">
          <div className="w-fit relative">
            <div className="flex items-center gap-10 flex-col">
              <div className="w-[80px] h-[80px]">
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

              <div className="flex md:gap-3 flex-col sm:flex-row sm:gap-3 items-center justify-center text-4xl md:text-5xl">
                <span className="block text-sky-700">DÍGITOS</span>
                <span className="block text-sky-700 font-bold">
                  CONTABILIDADE
                </span>
              </div>
            </div>

            <div className="w-[50px] h-[50px] absolute left-12 top-[40%]">
              <ReactLottie
                animation={plusAnimation}
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-[50px] h-[50px] absolute right-10 top-1/2">
              <ReactLottie
                animation={minusAnimation}
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-[50px] h-[50px] absolute right-[50%] left-[50%] -bottom-10">
              <ReactLottie animation={xAnimation} width="100%" height="100%" />
            </div>
          </div>

          <div className="flex flex-col items-center max-w-lg">
            <h1 className="text-center sm:text-lg md:text-xl text-gray-700">
              Multiplicando{" "}
              <span className="text-green-700 font-bold">resultados</span> e
              compartilhando{" "}
              <span className="text-green-700 font-bold">conhecimentos</span>
            </h1>

            <a
              href="#"
              className="bg-green-600 w-fit px-5 flex items-center rounded-md shadow-lg text-white text-lg h-12 mt-5 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Seja nosso cliente
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
