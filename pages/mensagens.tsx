import { useMutation, useQuery } from "@apollo/client";
import {
  InboxIcon,
  PhoneIcon,
  DocumentMagnifyingGlassIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Button from "../components/Button";
import HeaderApp from "../components/Head";
import Menu from "../components/Menu";
import { configs } from "../configs";
import { FIND_MESSAGES, SET_READED } from "../graphql/messate";

interface Props {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: Date;
  readed: boolean;
}

const Mensagens = () => {
  const [messages, setMessages] = useState<Props[]>([]);
  const [message, setMessage] = useState<Props | null>();

  const { data, error } = useQuery(FIND_MESSAGES);

  const [updateReaded, { error: readedError, loading: readedLoading }] =
    useMutation(SET_READED);

  useEffect(() => {
    if (data) {
      setMessages(data.messages);
    }
    if (error) {
      alert("Ocorreu um erro ao listar as mensagens");
    }
    if (readedError) {
      alert("Ocorreu um erro ao listar as mensagens");
    }
  }, [data, error, readedError]);

  const updateToReaded = (id: string) => {
    setMessage(null);
    const result = messages.find((obj) => obj.id === id);
    setMessage(result);
    updateReaded({
      variables: { id: id },
    }).then((response) => {
      if (response.errors) {
        alert("Ocorreu um erro ao ler a mensagem");
      }
    });
  };

  const formatDate = (myDate: Date) => {
    const dateformat = new Date(myDate);
    const dia = dateformat.getDate().toString().padStart(2, "0");
    const mes = (dateformat.getMonth() + 1).toString().padStart(2, "0");
    const ano = dateformat.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  return (
    <Fragment>
      <HeaderApp title="Digitos Contabilidade" />
      <Menu />
      <div className="w-full bg-gradient-to-tr from-sky-50 to-sky-300 py-7">
        <div className="container py-16 mx-auto px-10 flex items-center justify-center">
          <span className="text-sky-700 text-4xl font-extrabold">
            MENSAGENS
          </span>
        </div>
      </div>

      <section className="container mx-auto px-5 max-w-4xl py-16">
        {messages.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <ArchiveBoxXMarkIcon className="w-16 h-16" />
            <span>Nenhuma mensagem para mostrar</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {messages.map((msn) => (
              <div
                className="overflow-hidden bg-white border rounded-md"
                key={msn.id}
              >
                <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Mensagem de: <strong>{msn.name}</strong>
                    </h3>
                    <span className="text-xs text-gray-600">
                      Data: {formatDate(msn.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    {/*<div
                    className={`px-3 py-1 ${
                      msn.readed === true
                        ? "text-green-600 border-green-600"
                        : "text-red-600 border-red-600"
                    } rounded-md border font-semibold`}
                  >
                    {msn.readed === true ? "Lida" : "Não lida"}
                </div>*/}
                    <Button
                      textLoading="Lendo..."
                      buttonSize="sm"
                      onClick={() => updateToReaded(msn.id)}
                      isLoading={readedLoading && message?.id === msn.id}
                    >
                      <DocumentMagnifyingGlassIcon className="w-4 h-4" />
                      Ler
                    </Button>
                  </div>
                </div>
                {message && message.id === msn.id ? (
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Nome
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {msn.name}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Telefone
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {msn.phone}
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {msn.email}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Mensagem
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          {msn.message}
                        </dd>
                      </div>
                    </dl>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="w-full bg-gray-900 pt-16 pb-10">
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
};

export default Mensagens;
