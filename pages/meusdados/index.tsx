import { Fragment, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import HeaderApp from "../../components/Head";
import Menu from "../../components/Menu";
import {
  Bars3Icon,
  IdentificationIcon,
  ArrowPathIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactInputMask from "react-input-mask";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function MyData() {
  const { m } = useRouter().query;
  const [registerMode, setRegisterMode] = useState<string>("cpf");

  useEffect(() => {
    registerMode === "" && setRegisterMode("cpf");
  }, [registerMode]);

  return (
    <Fragment>
      <HeaderApp title="Digitos Contabilidade | Meus dados" />
      <Menu />
      <div className="w-full bg-gradient-to-tr from-sky-50 to-sky-300 py-12 text-center text-5xl font-bold text-sky-700">
        MEUS DADOS
      </div>

      <section className="container mx-auto px-10 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="bg-green-600 w-fit px-5 flex items-center gap-2 rounded-md text-white h-10 hover:bg-green-700 active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 lg:hidden">
            <Bars3Icon className="w-4 h-4" />
            Menu
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-white backdrop-blur-sm bg-opacity-90 rounded-md z-50 py-2 px-2 border shadow-lg w-48 ml-10 mt-1">
              <DropdownMenu.Label />
              <Link href={"?m=dados"} passHref>
                <DropdownMenu.Item className="text-gray-800 py-2 px-2 rounded-md flex items-center gap-2 hover:bg-sky-700 cursor-pointer hover:text-white active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <IdentificationIcon className="w-4 h-4" />
                  Meus dados
                </DropdownMenu.Item>
              </Link>
              <Link href={"?m=assinaturas"} passHref>
                <DropdownMenu.Item className="text-gray-800 py-2 px-2 rounded-md flex items-center gap-2 hover:bg-sky-700 cursor-pointer hover:text-white active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <ShoppingBagIcon className="w-4 h-4" />
                  Minhas assinaturas
                </DropdownMenu.Item>
              </Link>
              <Link href={"?m=compras"} passHref>
                <DropdownMenu.Item className="text-gray-800 py-2 px-2 rounded-md flex items-center gap-2 hover:bg-sky-700 cursor-pointer hover:text-white active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <ShoppingCartIcon className="w-4 h-4" />
                  Minhas compras
                </DropdownMenu.Item>
              </Link>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <div className="border rounded-md shadow-sm h-fit hidden lg:block">
          <span className="flex items-center gap-2 p-2 border-b text-sky-700 font-bold">
            <Bars3Icon className="w-5 h-5" />
            MENU
          </span>

          <Link href={"?m=dados"}>
            <a className="flex items-center gap-2 p-2 w-full hover:bg-sky-50 active:bg-sky-100 border-b cursor-pointer">
              <IdentificationIcon className="w-5 h-5" />
              Meus dados
            </a>
          </Link>
          <Link href={"?m=assinaturas"}>
            <a className="flex items-center gap-2 p-2 w-full hover:bg-sky-50 active:bg-sky-100 border-b cursor-pointer">
              <ShoppingBagIcon className="w-5 h-5" />
              Minhas assinaturas
            </a>
          </Link>
          <Link href={"?m=compras"}>
            <a className="flex items-center gap-2 p-2 w-full hover:bg-sky-50 active:bg-sky-100 cursor-pointer">
              <ShoppingCartIcon className="w-5 h-5" />
              Minhas compras
            </a>
          </Link>
        </div>
        <div className="lg:col-span-3">
          {m === "dados" && (
            <section className="lg:p-5 shadow-sm lg:border rounded-md">
              <ToggleGroup.Root
                type="single"
                className="inline-flex"
                onValueChange={(e) => setRegisterMode(e)}
                value={registerMode}
              >
                <ToggleGroup.Item
                  value="cpf"
                  className={`${
                    registerMode === "cpf"
                      ? "bg-sky-700 text-white"
                      : "text-sky-700"
                  } h-10 px-3 flex items-center rounded-l-md border border-sky-700`}
                >
                  Pessoa Física
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="cnpj"
                  className={`${
                    registerMode === "cnpj"
                      ? "bg-sky-700 text-white"
                      : "text-sky-700"
                  } h-10 px-3 flex items-center border border-sky-700 rounded-r-md`}
                >
                  Pessoa Jurídica
                </ToggleGroup.Item>
              </ToggleGroup.Root>

              <div className="flex flex-col mt-5 gap-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <label>
                      {registerMode === "cpf"
                        ? "Nome completo"
                        : "Razão social"}{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder={
                        registerMode === "cpf"
                          ? "Nome completo"
                          : "Razão social"
                      }
                    />
                  </div>

                  <div>
                    <label>
                      {registerMode === "cpf" ? "CPF" : "CNPJ"}{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <ReactInputMask
                      mask={
                        registerMode === "cpf"
                          ? "999.999.999-99"
                          : "99.999.999/9999-99"
                      }
                      type="text"
                      className="input"
                      placeholder={registerMode === "cpf" ? "CPF" : "CNPJ"}
                    />
                  </div>
                </div>

                <div
                  className={`grid ${
                    registerMode === "cpf"
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-3"
                  } gap-3`}
                >
                  {registerMode === "cpf" ? (
                    ""
                  ) : (
                    <div>
                      <label>
                        Nome fantasia <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        className="input"
                        placeholder="Nome fantasia"
                      />
                    </div>
                  )}
                  <div>
                    <label>Email</label>
                    <input type="email" className="input" placeholder="Email" />
                  </div>

                  <div>
                    <label>
                      Telefone (Whatsapp)
                      <span className="text-red-600">*</span>
                    </label>
                    <ReactInputMask
                      mask={"(99) 99999-9999"}
                      type="text"
                      className="input"
                      placeholder={"Telefone"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <label>
                      Rua
                      <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="input" placeholder={"Rua"} />
                  </div>

                  <div>
                    <label>
                      Número
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder={"Número"}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="lg:col-span-2">
                    <label>Complemento</label>
                    <input
                      type="text"
                      className="input"
                      placeholder={"Complemento"}
                    />
                  </div>

                  <div>
                    <label>
                      Bairro
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder={"Bairro"}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <div className="lg:col-span-1">
                    <label>
                      CEP <span className="text-red-600">*</span>
                    </label>
                    <ReactInputMask
                      mask={"99.999-999"}
                      type="text"
                      className="input"
                      placeholder={"CEP"}
                    />
                  </div>

                  <div className="lg:col-span-3">
                    <label>
                      Cidade
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder={"Cidade"}
                    />
                  </div>

                  <div className="lg:col-span-1">
                    <label>
                      Estado <span className="text-red-600">*</span>
                    </label>
                    <select className="input" placeholder="Estado">
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="AP">AP</option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MT">MT</option>
                      <option value="MS">MS</option>
                      <option value="MG">MG</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="SE">SE</option>
                      <option value="TO">TO</option>
                    </select>
                  </div>
                </div>

                <button className="button-green mt-5">
                  <PencilSquareIcon className="w-4 h-4" />
                  Atualizar dados
                </button>
              </div>
            </section>
          )}
          {m === "assinaturas" && (
            <div className="overflow-hidden shadow-sm border rounded-md w-full">
              <div className="w-full max-w-full overflow-y-auto">
                <table className="table-auto w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-3 border-b text-center w-12"></th>
                      <th className="py-2 px-3 border-b text-left">Pacote</th>
                      <th className="py-2 px-3 border-b text-left w-28">
                        Vencimento
                      </th>
                      <th className="py-2 px-3 border-b text-left w-24">
                        Status
                      </th>
                      <th className="py-2 px-3 border-b text-right w-36">
                        Valor mensal
                      </th>
                      <th className="py-2 px-3 border-b text-center w-36">
                        Opções
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-3 border-b text-center">
                        <ShoppingBagIcon className="w-5 h-5" />
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        Pacote de Honorários
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        10/10/1010
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        <span className="flex items-center h-7 justify-center border border-green-600 text-green-600 rounded-md select-none px-2">
                          ativo
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b text-right">
                        R$ 200,00
                      </td>
                      <td className="py-2 px-3 border-b text-center w-36">
                        <span>Nenhuma</span>
                      </td>
                    </tr>

                    <tr className="bg-red-50">
                      <td className="py-2 px-3 border-b text-center">
                        <ShoppingBagIcon className="w-5 h-5" />
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        Pacote de Honorários
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        10/10/1010
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        <span className="flex items-center h-7 justify-center border border-red-600 text-red-600 rounded-md select-none px-2">
                          vencido
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b text-right">
                        R$ 200,00
                      </td>
                      <td className="py-2 px-3 border-b text-center w-36">
                        <button className="h-7 flex items-center justify-center w-full gap-2 bg-sky-700 px-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-800 active:bg-sky-700">
                          <ArrowPathIcon className="w-4 h-4" />
                          Renovar
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-3 border-b text-center">
                        <ShoppingBagIcon className="w-5 h-5" />
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        Pacote de Honorários
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        10/10/1010
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        <span className="flex items-center h-7 justify-center border border-green-600 text-green-600 rounded-md select-none px-2">
                          ativo
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b text-right">
                        R$ 200,00
                      </td>
                      <td className="py-2 px-3 border-b text-center w-36">
                        <span>Nenhuma</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {m === "compras" && (
            <div className="overflow-hidden shadow-sm border rounded-md w-full">
              <div className="w-full max-w-full overflow-y-auto">
                <table className="table-auto w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-3 border-b text-center w-12"></th>
                      <th className="py-2 px-3 border-b text-left">Pacote</th>
                      <th className="py-2 px-3 border-b text-left w-28">
                        Compra
                      </th>
                      <th className="py-2 px-3 border-b text-left w-24">
                        Status
                      </th>
                      <th className="py-2 px-3 border-b text-right w-36">
                        Valor
                      </th>
                      <th className="py-2 px-3 border-b text-center w-36">
                        Opções
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-3 border-b text-center">
                        <ShoppingBagIcon className="w-5 h-5" />
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        Pacote de Honorários
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        10/10/1010
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        <span className="flex items-center h-7 justify-center border border-green-600 text-green-600 rounded-md select-none px-2">
                          finalizada
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b text-right">
                        R$ 200,00
                      </td>
                      <td className="py-2 px-3 border-b text-center w-36">
                        <button className="h-7 flex items-center justify-center w-full gap-2 bg-sky-700 px-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-800 active:bg-sky-700">
                          <ShoppingCartIcon className="w-4 h-4" />
                          Comprar
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-3 border-b text-center">
                        <ShoppingBagIcon className="w-5 h-5" />
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        Pacote de Honorários
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        10/10/1010
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        <span className="flex items-center h-7 justify-center border border-red-600 text-red-600 rounded-md select-none px-2">
                          cancelada
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b text-right">
                        R$ 200,00
                      </td>
                      <td className="py-2 px-3 border-b text-center w-36">
                        <button className="h-7 flex items-center justify-center w-full gap-2 bg-sky-700 px-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-800 active:bg-sky-700">
                          <ShoppingCartIcon className="w-4 h-4" />
                          Comprar
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-3 border-b text-center">
                        <ShoppingBagIcon className="w-5 h-5" />
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        Pacote de Honorários
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        10/10/1010
                      </td>
                      <td className="py-2 px-3 border-b text-left">
                        <span className="flex items-center h-7 justify-center border border-yellow-600 text-yellow-600 rounded-md select-none px-2">
                          aguardando
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b text-right">
                        R$ 200,00
                      </td>
                      <td className="py-2 px-3 border-b text-center w-36">
                        <button className="h-7 flex items-center justify-center w-full gap-2 bg-sky-700 px-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500 hover:bg-sky-800 active:bg-sky-700">
                          <ShoppingCartIcon className="w-4 h-4" />
                          Comprar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}
