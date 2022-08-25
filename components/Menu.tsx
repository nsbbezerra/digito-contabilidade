import Image from "next/image";
import { Fragment } from "react";
import {
  Bars3Icon,
  HomeIcon,
  BuildingStorefrontIcon,
  TagIcon,
  PhoneIcon,
  PencilIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Menu() {
  return (
    <Fragment>
      <div className="w-full h-16 shadow-sm sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm z-30">
        <nav className="container mx-auto px-10 lg:px-20 h-16 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10">
              <Image
                src="/img/digitos300.png"
                width={100}
                height={100}
                objectFit="cover"
                alt="Real Contabilidade"
                quality={100}
              />
            </div>
          </div>

          <div className="items-center gap-7 hidden lg:flex">
            <Link href={"/"} passHref>
              <a
                href="#"
                className="text-blue-700 cursor-pointer hover:text-blue-800 active:text-blue-700 flex items-center gap-1"
              >
                <HomeIcon className="w-4 h-4" />
                Início
              </a>
            </Link>
            <Link href={"#quem-somos"} passHref>
              <a
                href="#"
                className="text-blue-700 cursor-pointer hover:text-blue-800 active:text-blue-700 flex items-center gap-1"
              >
                <BuildingStorefrontIcon className="w-4 h-4" />
                Quem Somos
              </a>
            </Link>
            <Link href={"#servicos"} passHref>
              <a
                href="#"
                className="text-blue-700 cursor-pointer hover:text-blue-800 active:text-blue-700 flex items-center gap-1"
              >
                <TagIcon className="w-4 h-4" />
                Serviços
              </a>
            </Link>
            <Link href="#artigos" passHref>
              <a
                href="#"
                className="text-blue-700 cursor-pointer hover:text-blue-800 active:text-blue-700 flex items-center gap-1"
              >
                <PencilIcon className="w-4 h-4" />
                Artigos
              </a>
            </Link>
            <Link href="#contato" passHref>
              <a
                href="#"
                className="text-blue-700 cursor-pointer hover:text-blue-800 active:text-blue-700 flex items-center gap-1 font-bold"
              >
                <PhoneIcon className="w-4 h-4" />
                Contato
              </a>
            </Link>

            <a
              href="#"
              className="bg-green-600 w-fit px-5 flex items-center gap-2 rounded-md text-white h-10 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <UserIcon className="w-4 h-4" />
              Área do cliente
            </a>
          </div>

          <button className="border border-blue-700 h-10 w-10 flex items-center justify-center rounded-md hover:bg-blue-100 active:bg-blue-300 lg:hidden">
            <Bars3Icon className="w-6 h-6 text-blue-700" />
          </button>
        </nav>
      </div>
    </Fragment>
  );
}
