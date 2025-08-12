import Image from "next/image";
import Header from "./components/headers/header";
import Homes from "./components/headers/home/home";
import About from "./components/headers/home/About";
import Contact from "./components/headers/home/Contact";
import Footer from "./components/headers/home/Footer";
import Experiences from "./components/headers/home/Experiences";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Homes />
        <About />
        <Experiences />

        <Contact />
        <Footer />


      </main>
    </>
  );
}
