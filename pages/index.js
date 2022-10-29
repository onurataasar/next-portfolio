import Head from "next/head";
import Image from "next/image";
import Divider from "../components/Divider";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Onur Ata Asar - Frontend Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Onur Ata Asar" message="Frontend Web Developer" />
      <Slider />
      <Divider />
      <Projects />
    </div>
  );
}
