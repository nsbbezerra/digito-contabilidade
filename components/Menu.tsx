import Image from "next/image";
import { Fragment, useContext, useState } from "react";
import {
  Bars3Icon,
  HomeIcon,
  BuildingStorefrontIcon,
  TagIcon,
  PhoneIcon,
  PencilIcon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";

import LoginContext from "../context/login";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { state: isLoginOpen, setState: setIsLoginOpen } =
    useContext(LoginContext);
  const [showPass, setShowPass] = useState<boolean>(false);

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
      <Link href="#contato" passHref>
        <a
          href="#"
          className="text-sky-700 cursor-pointer hover:text-sky-800 active:text-sky-700 flex items-center gap-1"
        >
          <PhoneIcon className="w-4 h-4" />
          Contato
        </a>
      </Link>
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

      <Dialog.Root
        open={isLoginOpen.isOpen}
        onOpenChange={() => setIsLoginOpen({ isOpen: !isLoginOpen.isOpen })}
      >
        <Dialog.Trigger asChild />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed top-0 right-0 left-0 bottom-0 bg-black z-50 bg-opacity-50 backdrop-blur-sm" />
          <Dialog.Content className="fixed w-[80%] left-[10%] right-[10%] sm:w-[50%] sm:left-[25%] sm:right-[25%] md:w-[40%] md:left-[30%] md:right-[30%] lg:w-[30%] bg-white shadow-lg rounded-md top-[15%] z-50 lg:left-[35%] lg:right-[35%]">
            <Dialog.Title className="px-4 py-3 text-lg font-semibold">
              Login
            </Dialog.Title>
            <Dialog.Close
              asChild
              className="rounded-full bg-black bg-opacity-10 h-7 w-7 absolute right-4 top-3 p-1 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"
            >
              <XMarkIcon />
            </Dialog.Close>

            <div className="p-5 flex flex-col gap-3 items-center">
              <div className="w-full">
                <label>Usuário</label>
                <input type="text" className="input" placeholder={"Usuário"} />
              </div>
              <div className="w-full relative">
                <label>Senha</label>

                <input
                  type={showPass ? "text" : "password"}
                  className="input"
                  placeholder={"Senha"}
                />
                <button
                  className="absolute bottom-3 right-3"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <EyeSlashIcon className="w-6 h-6" />
                  ) : (
                    <EyeIcon className="w-6 h-6" />
                  )}
                </button>
              </div>

              <button className="button-green-full mt-3">
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                Login
              </button>

              <a className="block w-fit hover:underline text-gray-600 text-center cursor-pointer">
                Esqueci minha senha
              </a>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  );
}
