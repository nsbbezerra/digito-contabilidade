import Image from "next/image";
import { Fragment } from "react";
import { InboxIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { configs } from "../configs";

export default function Footer() {
  return (
    <Fragment>
      <footer className="w-full bg-gray-900 pt-16 pb-10" id="contato">
        <div className="container mx-auto px-10 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="w-full">
              <div className="flex items-center gap-3">
                <div className="w-[70px] h-[70px]">
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
                    DíGITOS
                  </span>
                  <span className="text-sky-200 font-semibold text-3xl select-none">
                    CONTABILIDADE
                  </span>
                </div>
              </div>

              <p className="text-gray-400 mt-5">
                Rua Machado de Assis, São João, 824, CEP 77807140, Araguaína -
                TO
              </p>
              <Link href={`mailto:${configs.email}`} passHref>
                <a
                  target={"_blank"}
                  className="flex items-center gap-2 text-sky-200 mt-2 hover:underline cursor-pointer"
                >
                  <InboxIcon className="w-5 h-5" />
                  {configs.email}
                </a>
              </Link>
              <Link href={`tel:${configs.phone}`} passHref>
                <a
                  target={"_blank"}
                  className="flex items-center gap-2 text-sky-200 mt-2 hover:underline cursor-pointer"
                >
                  <PhoneIcon className="w-5 h-5" />
                  {configs.phone}
                </a>
              </Link>
            </div>
            <div className="w-full">
              <span className="text-4xl font-semibold text-green-500">
                Onde Estamos
              </span>
              <iframe
                className="mt-2 rounded-md shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7547.294609566605!2d-48.201951719508926!3d-7.190582173320585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d90c4c621e1f7f%3A0xf96ef1c5f9a298d0!2sR.%20Machado%20de%20Assis%2C%20824%20-%20S%C3%A3o%20Jo%C3%A3o%2C%20Aragua%C3%ADna%20-%20TO%2C%2077805-070!5e0!3m2!1spt-BR!2sbr!4v1661288181275!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full">
              <span className="text-4xl font-semibold text-green-500">
                Queremos cuidar do seu negócio!
              </span>

              <Link href={`https://wa.me/${configs.whatsapp}`} passHref>
                <a
                  target={"_blank"}
                  href="#"
                  className="bg-green-600 w-fit px-5 flex items-center rounded-md shadow-lg text-white text-lg h-12 mt-5 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Saiba Mais
                </a>
              </Link>
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
