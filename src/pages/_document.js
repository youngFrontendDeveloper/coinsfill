import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header/Header";
import { Mont } from "@/fonts/fonts";
import Footer from "@/components/Footer/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={ Mont.className }>
      <Header />
      <main className="main">
        <Main />
      </main>
      <Footer />
      <div id="modal-root" />
      <NextScript />

      </body>
    </Html>
  );
}
