import Image from "next/image";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer className="w-full bg-gray-900 pt-16 pb-10" id="contato">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="w-full">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16">
                  <Image
                    src="/img/digitos300.png"
                    width={100}
                    height={100}
                    objectFit="cover"
                    alt="Real Contabilidade"
                    quality={100}
                  />
                </div>
                <div className="h-16 border-l border-l-sky-200" />
                <div className="flex flex-col">
                  <span className="text-sky-200 font-semibold text-2xl -mb-1 select-none">
                    DIGITOS
                  </span>
                  <span className="text-sky-200 font-semibold text-3xl select-none">
                    CONTABILIDADE
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:col-span-2">
              <span className="text-4xl font-semibold text-green-500">
                Queremos cuidar do seu negócio!
              </span>

              <a
                href="#"
                className="bg-green-600 w-fit px-5 flex items-center rounded-md shadow-lg text-white text-lg h-12 mt-5 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          <hr className="border-gray-600 my-10" />

          <p className="text-center w-full text-sky-200">
            © 2022-2023 Dígitos Contabilidade - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </Fragment>
  );
}
