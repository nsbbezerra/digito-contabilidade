import Head from "next/head";

interface Props {
  title: string;
}

export default function HeaderApp({ title }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/img/digitos300.png" type="image/png" />
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="LTMofHt7sdUqkEw07lWFD-iZXaaKO2JyI2IPpaJTZIM"
      />
      <meta
        name="description"
        content="Dígitos Contabilidade, serviços contábeis, societário, imposto de renda, abertura de CNPJ, gestão contábil"
      />
      <meta
        name="keywords"
        content="contabilidade, dígitos, serviços, contábil, cnpj, cpf, societário, imposto de renda, leão"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Dígitos Contabilidade, serviços contábeis, societário, imposto de renda, abertura de CNPJ, gestão contábil"
      />
      <meta
        property="og:url"
        content="https://www.digitocontabilidade.com.br/"
      />
      <meta
        property="og:site_name"
        content="Dígitos Contabilidade, serviços contábeis, societário, imposto de renda, abertura de CNPJ, gestão contábil"
      />
      <meta
        name="og:description"
        content="Dígitos Contabilidade, serviços contábeis, societário, imposto de renda, abertura de CNPJ, gestão contábil"
      />
      <meta name="robots" content="index,nofollow" />
      <meta
        property="og:author"
        content="NK Informática de Pedro Afonso - TO, Desenvolvedor Responsável: Natanael Bezerra"
      />
      <meta name="googletboot" content="index,nofollow" />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta content="Global" name="distribution" />
    </Head>
  );
}
