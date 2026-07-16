import Head from "next/head";
import {
  Hero,
  Trust,
  Partners,
  Products,
  MoreProducts,
  Steps,
  Stats,
  Advantages,
  UsefulServices,
  CheckPolicy,
  CalcTeaser,
  Testimonials,
  Blog,
  FAQ,
  CtaBand,
} from "@/components";
import { BRAND } from "@/consts";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${BRAND.name} — автострахование онлайн: ОСАГО и КАСКО за 3 минуты`}</title>
      </Head>

      <Hero />
      <Trust />
      <Partners />
      <Products />
      <MoreProducts />
      <Steps />
      <Stats />
      <Advantages />
      <UsefulServices />
      <CheckPolicy />
      <CalcTeaser />
      <Testimonials />
      <Blog />
      <FAQ />
      <CtaBand />
    </>
  );
}
