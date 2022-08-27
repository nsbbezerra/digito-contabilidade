import { Fragment, useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderApp from "../components/Head";
import Menu from "../components/Menu";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import ReactInputMask from "react-input-mask";
import { InboxArrowDownIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const [registerMode, setRegisterMode] = useState<string>("cpf");

  useEffect(() => {
    registerMode === "" && setRegisterMode("cpf");
  }, [registerMode]);

  return (
    <Fragment>
      <HeaderApp title="Digitos Contabilidade | Cadastro" />
      <Menu />
      <div className="w-full bg-gradient-to-tr from-sky-50 to-sky-300 py-12 text-center text-5xl font-bold text-sky-700">
        CADASTRO
      </div>

      <section className="container mx-auto px-5 sm:px-10 lg:px-0 max-w-4xl py-16">
        <ToggleGroup.Root
          type="single"
          className="inline-flex mb-3"
          onValueChange={(e) => setRegisterMode(e)}
          value={registerMode}
        >
          <ToggleGroup.Item
            value="cpf"
            className={`${
              registerMode === "cpf" ? "bg-sky-700 text-white" : "text-sky-700"
            } h-10 px-3 flex items-center rounded-l-md border border-sky-700`}
          >
            Pessoa Física
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="cnpj"
            className={`${
              registerMode === "cnpj" ? "bg-sky-700 text-white" : "text-sky-700"
            } h-10 px-3 flex items-center border border-sky-700 rounded-r-md`}
          >
            Pessoa Jurídica
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        <div className="flex flex-col mt-5 gap-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2">
              <label>
                {registerMode === "cpf" ? "Nome completo" : "Razão social"}{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="input"
                placeholder={
                  registerMode === "cpf" ? "Nome completo" : "Razão social"
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
              <input type="text" className="input" placeholder={"Número"} />
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
              <input type="text" className="input" placeholder={"Bairro"} />
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
              <input type="text" className="input" placeholder={"Cidade"} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label>
                Usuário <span className="text-red-600">*</span>
              </label>
              <input type="text" className="input" placeholder={"Usuário"} />
            </div>

            <div>
              <label>
                Senha
                <span className="text-red-600">*</span>
              </label>
              <input type="password" className="input" placeholder={"Senha"} />
            </div>
          </div>

          <button className="button-green mt-5">
            <InboxArrowDownIcon className="w-4 h-4" />
            Cadastrar
          </button>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}
