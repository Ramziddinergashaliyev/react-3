import React from "react";
import Header from "./components/layout/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/layout/footer/Footer";
import Mobile from "./components/mobile/Mobile";
import { MobileData } from "./static/productsData";

function App() {
  let mobil = MobileData.map((el) => <Mobile key={el.id} {...el} />);

  return (
    <>
      <Header />
      <main>
        <Hero />
        {mobil}
      </main>
      <Footer />
    </>
  );
}

export default App;
