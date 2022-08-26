import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Bars3Icon,
  HomeIcon,
  BuildingStorefrontIcon,
  TagIcon,
  PhoneIcon,
  PencilIcon,
  UserIcon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  InboxArrowDownIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const MenuItems = () => (
    <div className="items-start gap-7 flex flex-col xl:flex-row xl:items-center">
      <Link href={"/"} passHref>
        <a
          href="#"
          className="text-sky-700 cursor-pointer hover:text-sky-800 active:text-sky-700 flex items-center gap-1"
        >
          <HomeIcon className="w-4 h-4" />
          Início
        </a>
      </Link>
      <Link href={"#quem-somos"} passHref>
        <a
          href="#"
          className="text-sky-700 cursor-pointer hover:text-sky-800 active:text-sky-700 flex items-center gap-1"
        >
          <BuildingStorefrontIcon className="w-4 h-4" />
          Quem Somos
        </a>
      </Link>
      <Link href={"#servicos"} passHref>
        <a
          href="#"
          className="text-sky-700 cursor-pointer hover:text-sky-800 active:text-sky-700 flex items-center gap-1"
        >
          <TagIcon className="w-4 h-4" />
          Serviços
        </a>
      </Link>
      <Link href="/artigos" passHref>
        <a
          href="#"
          className="text-sky-700 cursor-pointer hover:text-sky-800 active:text-sky-700 flex items-center gap-1"
        >
          <PencilIcon className="w-4 h-4" />
          Artigos
        </a>
      </Link>
      <Link href="#contato" passHref>
        <a
          href="#"
          className="text-sky-700 cursor-pointer hover:text-sky-800 active:text-sky-700 flex items-center gap-1 font-bold"
        >
          <PhoneIcon className="w-4 h-4" />
          Contato
        </a>
      </Link>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="bg-green-600 w-fit px-5 flex items-center gap-2 rounded-md text-white h-10 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
          <UserIcon className="w-4 h-4" />
          Área do cliente
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-white backdrop-blur-sm bg-opacity-90 rounded-md z-50 py-2 px-2 border shadow-lg mt-3 w-48">
            <DropdownMenu.Label />
            <DropdownMenu.Item className="text-gray-800 py-1 px-2 rounded-md flex items-center gap-2 hover:bg-sky-700 cursor-pointer hover:text-white active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <ArrowRightOnRectangleIcon className="w-4 h-4" />
              Login
            </DropdownMenu.Item>
            <Link href={"/cadastro"} passHref>
              <DropdownMenu.Item className="text-gray-800 py-1 px-2 rounded-md flex items-center gap-2 hover:bg-sky-700 cursor-pointer hover:text-white active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                <InboxArrowDownIcon className="w-4 h-4" />
                Cadastre-se
              </DropdownMenu.Item>
            </Link>
            <DropdownMenu.Item className="text-gray-800 py-1 px-2 rounded-md flex items-center gap-2 hover:bg-sky-700 cursor-pointer hover:text-white active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <IdentificationIcon className="w-4 h-4" />
              Meus dados
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );

  return (
    <Fragment>
      <div className="w-full min-h-fit shadow-md sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm z-30">
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
            <div className="flex flex-col">
              <span className="text-sky-700 text-sm -mb-1 select-none">
                DÍGITOS
              </span>
              <span className="text-sky-700 font-bold text-base select-none ">
                CONTABILIDADE
              </span>
            </div>
          </div>

          <div className="hidden xl:block">
            <MenuItems />
          </div>

          <button
            className="border border-sky-700 h-10 w-10 flex items-center justify-center rounded-md hover:bg-sky-100 active:bg-sky-300 xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-sky-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-sky-700" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="container mx-auto py-5 px-10 lg:px-20">
            <MenuItems />
          </div>
        )}
      </div>
    </Fragment>
  );
}
