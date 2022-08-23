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
    </Head>
  );
}
