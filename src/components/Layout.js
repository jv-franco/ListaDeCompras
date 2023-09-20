import Head from "next/head";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>Lista de Compras</title>
      </Head>

      <main className="main-container">
        <Menu />
      </main>
    </>
  );
}
